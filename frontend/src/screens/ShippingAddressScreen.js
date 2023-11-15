import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
// Définition de la fonction ShippingAddressScreen comme composant par défaut
export default function ShippingAddressScreen() {
  // Utilisation du hook de navigation pour naviguer entre les pages
  const navigate = useNavigate();

  // Utilisation du contexte pour accéder aux données globales de l'application
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  // Initialisation des états locaux avec les informations de l'adresse de livraison depuis l'état global
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  // Effet pour rediriger l'utilisateur vers la page de connexion si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);

  // Fonction de gestion de la soumission du formulaire d'adresse de livraison
  const submitHandler = (e) => {
    e.preventDefault();
    // Met à jour l'état global avec les nouvelles informations d'adresse de livraison
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    // Stocke également les informations d'adresse de livraison dans le stockage local
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    // Redirige l'utilisateur vers la page de paiement
    navigate('/payment');
  };

  // Rendu du composant
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      {/* Affichage des étapes de la commande */}
      <CheckoutSteps step1 step2></CheckoutSteps>

      <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          {/* Champ de formulaire pour le nom complet */}
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>

          {/* Champ de formulaire pour l'adresse */}
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          {/* Champ de formulaire pour la ville */}
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>

          {/* Champ de formulaire pour le code postal */}
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>

          {/* Champ de formulaire pour le pays */}
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>

          {/* Bouton de soumission du formulaire */}
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
