import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// Définition d'un réducteur (reducer) pour gérer les actions sur l'état global
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      // En cas de demande de chargement, met à jour l'état pour indiquer le chargement en cours
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      // En cas de succès de la requête, met à jour l'état avec les données reçues et indique que le chargement est terminé
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      // En cas d'échec de la requête, met à jour l'état avec un message d'erreur et indique que le chargement est terminé
      return { ...state, loading: false, error: action.payload };
    default:
      // Par défaut, renvoie simplement l'état inchangé
      return state;
  }
};

// Définition d'une fonction composant Quicksilver
function Quicksilver() {
  // Utilisation du hook useReducer pour gérer l'état global avec le réducteur précédemment défini
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [], // Tableau vide pour stocker les produits
    loading: true, // Indicateur de chargement initialisé à vrai
    error: '', // Message d'erreur initialisé comme une chaîne vide
  });

  // Utilisation du hook useEffect pour effectuer des opérations asynchrones lors du chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      // Déclenche une action FETCH_REQUEST pour indiquer le début du chargement
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // Effectue une requête GET pour obtenir des produits depuis l'API
        const result = await axios.get('/api/products');
        // En cas de succès, déclenche une action FETCH_SUCCESS avec les données reçues
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        // En cas d'échec, déclenche une action FETCH_FAIL avec le message d'erreur
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    // Appelle la fonction fetchData lors du montage initial du composant (dépendance vide [])
    fetchData();
  }, []);

  // Rendu du composant Quicksilver
  return (
    <div>
      <Helmet>
        <title>Quicksilver</title>
      </Helmet>
      <h1>Produit Quicksilver</h1>
      <div className="products">
        {loading ? (
          // Affiche un composant de chargement si le chargement est en cours
          <LoadingBox />
        ) : error ? (
          // Affiche un composant de boîte d'erreur en cas d'erreur
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // Affiche la liste des produits si le chargement est terminé sans erreur
          <Row>
            {products
              .filter((product) => product.brand === 'Quicksilver')
              .map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

// Exporte la fonction Quicksilver comme composant par défaut
export default Quicksilver;
