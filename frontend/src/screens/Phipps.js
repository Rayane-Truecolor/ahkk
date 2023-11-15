import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// Définition d'un réducteur (reducer) pour gérer les actions liées aux produits
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      // En cas de demande de chargement, met à jour l'état pour indiquer le chargement en cours
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      // En cas de succès de la requête, met à jour l'état avec les données des produits et indique que le chargement est terminé
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      // En cas d'échec de la requête, met à jour l'état avec un message d'erreur et indique que le chargement est terminé
      return { ...state, loading: false, error: action.payload };
    default:
      // Par défaut, renvoie simplement l'état inchangé
      return state;
  }
};

// Définition de la fonction Phipps
function Phipps() {
  // Utilisation du hook useReducer pour gérer l'état local lié aux produits Mark Phipps Caviar
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [], // Données des produits initialisées comme un tableau vide
    loading: true, // Indicateur de chargement initialisé à vrai
    error: '', // Message d'erreur initialisé comme une chaîne vide
  });

  // Utilisation du hook useEffect pour effectuer une requête de récupération de données au chargement de la page
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data); (cette ligne est commentée et n'est pas utilisée)
    };
    fetchData();
  }, []);

  // Rendu du composant Phipps
  return (
    <div>
      <Helmet>
        <title>Mark Phipps Caviar</title>
      </Helmet>
      <h1>Produit Mark Phipps Caviar</h1>
      <div className="products">
        {loading ? (
          // Affiche un composant de chargement si le chargement est en cours
          <LoadingBox />
        ) : error ? (
          // Affiche un composant de boîte d'erreur en cas d'erreur
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // Affiche la liste des produits Mark Phipps Caviar
          <Row>
            {products
              .filter((product) => product.brand === 'Mark Phipps Caviar')
              .map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  {/* Affiche chaque produit en utilisant le composant Product */}
                  <Product product={product}></Product>
                </Col>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

// Exporte la fonction Phipps en tant que composant par défaut
export default Phipps;
