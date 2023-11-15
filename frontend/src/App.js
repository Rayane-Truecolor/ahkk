import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import ProductScreen from './screens/ProductScreen';

import Container from 'react-bootstrap/Container';

import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ALL from './ALL';
import Card from './screens/Card';
import Carousele from './components/Carousel/Carousele';
import CarouselePopulaire from './components/Carousel/Carousele_top';
import GridExample from './components/Card';
import CGU from './screens/CGU';
import Qui from './screens/Qui';
import Shortboard from './screens/Shortboard';
import Wax from './screens/Wax';
import Hybride from './screens/Hybride';
import NavbarComponent from './screens/dakopebi';
import Acceuil from './screens/Acceuil';
import FAQ from './screens/FAQ';
import Contact from './screens/Contact';
import Longboard from './screens/Longboard';
import Pads from './screens/Pads';
import Derive from './screens/Derive';
import Combinaison from './screens/Combinaison';
import Leash from './screens/Leash';
import Footer from './screens/Footer';
import GoPro from './screens/GoPro';
import New from './screens/New';
import Article1 from './screens/Article1';
import Mention from './screens/Mention';
import Quicksilver from './screens/Quicksilver';
import Venon from './screens/Venon';
import Kudat from './screens/Kudat';
import Phipps from './screens/Phipps';
import NKX from './screens/NKX';
import Olaian from './screens/Olaian';
import Search from './components/Search';
import ProfileScreen from './screens/ProfileScreen';

import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import { StoreProvider } from './Store';

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <NavbarComponent />

          <Container className="mt-3">
            <Routes>
              <Route path="/Search" element={<Search />} />

              <Route path="/GoPro" element={<GoPro />} />
              <Route path="/new" element={<New />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/CartScreen" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route path="/" element={<ALL />} />
              <Route path="/Hybride" element={<Hybride />} />
              <Route path="/dakopebi" element={<NavbarComponent />} />
              <Route path="/Acceuil" element={<Acceuil />} />
              <Route path="/Card" element={<Card />} />
              <Route path="/Carousele" element={<Carousele />} />
              <Route
                path="/CarouselePopulaire"
                element={<CarouselePopulaire />}
              />

              <Route path="/GridExample" element={<GridExample />} />
              <Route path="/Mention" element={<Mention />} />

              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/CGU" element={<CGU />} />
              <Route path="/Qui" element={<Qui />} />
              <Route path="/Shortboard" element={<Shortboard />} />
              <Route path="/Longboard" element={<Longboard />} />
              <Route path="/Pads" element={<Pads />} />
              <Route path="/Derive" element={<Derive />} />
              <Route path="/Combinaison" element={<Combinaison />} />
              <Route path="/Leash" element={<Leash />} />
              <Route path="/Wax" element={<Wax />} />
              <Route path="/article1" element={<Article1 />} />
              <Route path="/Quicksilver" element={<Quicksilver />} />
              <Route path="/Venon" element={<Venon />} />
              <Route path="/Kudat" element={<Kudat />} />
              <Route path="/Phipps" element={<Phipps />} />
              <Route path="/NKX" element={<NKX />} />
              <Route path="/Olaian" element={<Olaian />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <StoreProvider>
                      <ProfileScreen />
                    </StoreProvider>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
