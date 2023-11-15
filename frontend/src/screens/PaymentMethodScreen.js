import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  // Définit la fonction de composant PaymentMethodScreen
  const navigate = useNavigate(); // Récupère la fonction de navigation

  const { state, dispatch: ctxDispatch } = useContext(Store); // Utilise le contexte global
  const {
    cart: { shippingAddress, paymentMethod }, // Destructuration de l'état global
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  ); // Utilise l'état local pour la méthode de paiement sélectionnée

  useEffect(() => {
    if (!shippingAddress.address) {
      // Si l'adresse de livraison n'est pas définie
      navigate('/shipping'); // Redirige vers l'écran de sélection d'adresse de livraison
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    // Gère la soumission du formulaire
    e.preventDefault(); // Empêche le comportement de soumission par défaut

    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName }); // Met à jour l'état global avec la méthode de paiement
    localStorage.setItem('paymentMethod', paymentMethodName); // Stocke la méthode de paiement dans le stockage local
    navigate('/placeorder'); // Redirige vers l'écran de confirmation de commande
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>{' '}
      {/* Affiche les étapes de la commande */}
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          {' '}
          {/* Formulaire de sélection de la méthode de paiement */}
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            {/* Option de paiement PayPal */}
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            {/* Option de paiement Stripe */}
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button> {/* Bouton de soumission */}
          </div>
        </Form>
      </div>
    </div>
  );
}
