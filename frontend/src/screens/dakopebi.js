import React, { useContext, useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Button,
  ButtonGroup,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageSelector from '../components/Trad/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Search from '../components/Search';
import sac from './Image_Screen/sac.png';
import user from './Image_Screen/user.png';

const NavbarComponent = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="d-flex flex-column site-container">
      <Navbar variant="dark">
        <Container>
          <LinkContainer to="/" className="logoo">
            <Navbar.Brand>Da'Wave</Navbar.Brand>
          </LinkContainer>
          <Nav className="m-auto">
            <Dropdown as={ButtonGroup}>
              <Button className="no-border-button">{i18n.t('Planche')}</Button>

              {/* Ajout de la classe "no-border-button" */}
              <Dropdown.Toggle split id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="/Hybride">
                  {' '}
                  {i18n.t('Hybride')}
                </Dropdown.Item>
                <Dropdown.Item href="/Shortboard">Shortboard</Dropdown.Item>
                <Dropdown.Item href="/Longboard">Longboard</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <span className="button-separator"></span>
            {/* Ajout d'un élément span pour créer la séparation */}
            <Nav.Link
              href="/Derive"
              className="button_Navbar"
              style={{ color: 'rgb(6, 39, 110)' }}
            >
              {i18n.t('Dérive')}
            </Nav.Link>
            <Nav.Link
              href="/Pads"
              className="button_Navbar"
              style={{ color: 'rgb(6, 39, 110)' }}
            >
              {i18n.t('Pads')}
            </Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Button className="no-border-button">
                {i18n.t('Accessoire')}
              </Button>
              {/* Ajout de la classe "no-border-button" */}
              <Dropdown.Toggle split id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="/Combinaison">
                  {' '}
                  {i18n.t('Combinaison')}
                </Dropdown.Item>
                <Dropdown.Item href="/Leash">Leash</Dropdown.Item>
                <Dropdown.Item href="/Wax">Wax</Dropdown.Item>
                <Dropdown.Item href="/GoPro">{i18n.t('Camera')}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <div className="vide">  </div>
          <Nav className="me-auto">
            <div className="Signin_out">
              {userInfo ? (
                <NavDropdown
                  title={
                    <div>
                      <img
                        src={user}
                        alt="User"
                        style={{ color: 'white', width: '40px' }}
                      />
                      Bienvenue {userInfo.name} !
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>{i18n.t('Profil')}</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>{i18n.t('Historique')}</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="/signout"
                    onClick={signoutHandler}
                    style={{ color: 'red', textDecoration: 'none' }}
                  >
                    {i18n.t('Deconnecter')}
                  </Link>
                </NavDropdown>
              ) : (
                <Link
                  className="nav-link"
                  to="/signin"
                  style={{ color: 'rgb(6, 39, 110)', textDecoration: 'none' }}
                >
                  {i18n.t('greeting')}
                </Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </div>

            <Link to="/CartScreen" className="nav-link">
              <span className="cart-icon">
                {' '}
                <img src={sac} alt="Sac à main" style={{ color: 'white' }} />
              </span>{' '}
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>

          <Search />
          <div className="language-selector">
            <button
              className="toggle-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {i18n.t('Langage')}
            </button>
            {isOpen && (
              <div className="language-dropdown">
                <button onClick={() => changeLanguage('en')}> English</button>
                <button onClick={() => changeLanguage('fr')}>Français</button>
                {/* Ajoutez d'autres boutons pour d'autres langues si nécessaire */}
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
