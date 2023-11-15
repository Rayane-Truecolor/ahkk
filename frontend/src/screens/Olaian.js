import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// Réducteur (reducer) pour gérer l'état des produits et du chargement
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }; // Marque le chargement en cours
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }; // Met à jour les produits et marque le chargement comme terminé
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }; // Marque le chargement comme terminé et stocke l'erreur en cas d'échec
    default:
      return state;
  }
};

function Olaian() {
  // Utilisation de useReducer pour gérer l'état des produits et des chargements
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [], // Tableau vide pour stocker les produits
    loading: true, // Indique si le chargement est en cours
    error: '', // Stocke les erreurs en cas d'échec du chargement
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' }); // Déclenche la requête, affiche le chargement

      try {
        const result = await axios.get('/api/products'); // Effectue une requête API pour récupérer les produits
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); // Met à jour l'état avec les produits récupérés
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message }); // En cas d'erreur, stocke l'erreur dans l'état
      }
    };

    fetchData(); // Appelle la fonction fetchData pour récupérer les produits lors du chargement initial
  }, []);

  return (
    <div>
      <Helmet>
        <title>Olaian</title>
      </Helmet>
      <h1>Produit Olaian</h1>
      <div className="products">
        {/* Affichage conditionnel en fonction de l'état de chargement et des erreurs */}
        {loading ? (
          <LoadingBox /> // Affiche un composant de chargement si le chargement est en cours
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox> // Affiche un message d'erreur en cas d'erreur
        ) : (
          <Row>
            {/* Affiche la liste des produits récupérés */}
            {products
              .filter((product) => product.brand === 'Olaian') // Filtre les produits par marque "Olaian"
              .map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={4} className="mb-3">
                  <Product product={product}></Product>{' '}
                  {/* Affiche un composant de produit avec les détails du produit */}
                </Col>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Olaian; // Exporte la composante Olaian
