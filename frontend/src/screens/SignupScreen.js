import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

// Définition de la fonction SignupScreen comme composant par défaut
export default function SignupScreen() {
  // Utilisation du hook de navigation pour naviguer entre les pages
  const navigate = useNavigate();
  // Utilisation du hook de location pour accéder aux paramètres de l'URL
  const { search } = useLocation();
  // Récupération du paramètre 'redirect' de l'URL, s'il existe
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  // Si 'redirectInUrl' est défini, utilisez sa valeur, sinon utilisez '/'
  const redirect = redirectInUrl ? redirectInUrl : '/';

  // Déclaration de variables d'état pour les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Utilisation du contexte pour accéder aux données globales de l'application
  const { state, dispatch: ctxDispatch } = useContext(Store);
  // Extraction des informations sur l'utilisateur à partir de l'état global
  const { userInfo } = state;

  // Fonction de gestion de la soumission du formulaire
  const submitHandler = async (e) => {
    e.preventDefault();
    // Vérification si les mots de passe correspondent
    if (password !== confirmPassword) {
      // Affichage d'une erreur en cas de non-correspondance des mots de passe
      toast.error('Passwords do not match');
      return;
    }
    try {
      // Envoi d'une requête POST pour l'inscription de l'utilisateur
      const { data } = await Axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      // Mise à jour de l'état global avec les données de l'utilisateur connecté
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // Stockage des informations de l'utilisateur dans le stockage local
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Redirection de l'utilisateur vers la page spécifiée dans 'redirect' ou '/'
      navigate(redirect || '/');
    } catch (err) {
      // Gestion des erreurs en cas d'échec de l'inscription
      toast.error(getError(err));
    }
  };

  // Effet qui redirige l'utilisateur s'il est déjà connecté
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // Rendu du composant
  return (
    <Container className="small-container">
      <Helmet>
        <title>S'inscrire</title>
      </Helmet>
      <h1 className="my-3">S'inscrire</h1>
      <Form onSubmit={submitHandler}>
        {/* Champ de formulaire pour le nom */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        {/* Champ de formulaire pour l'email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* Champ de formulaire pour le mot de passe */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Champ de formulaire pour la confirmation du mot de passe */}
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirmez Mot de passe</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Group>

        {/* Bouton de soumission du formulaire */}
        <div className="mb-3">
          <Button type="submit" className="mb-3">
            S'inscrire
          </Button>
        </div>

        {/* Lien pour se connecter si l'utilisateur a déjà un compte */}
        <div className="mb-3">
          Vous avez déjà un compte ?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Se connecter</Link>
        </div>
      </Form>
    </Container>
  );
}
