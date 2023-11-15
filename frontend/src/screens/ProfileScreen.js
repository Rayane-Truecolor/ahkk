import React, { useContext, useReducer, useState } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';
import { logoutAction } from '../components/authReducer'; // Assurez-vous d'importer correctement l'action

// Définition d'un réducteur (reducer) pour gérer les actions liées à la mise à jour du profil
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      // En cas de demande de mise à jour, met à jour l'état pour indiquer le chargement en cours
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      // En cas de succès de la mise à jour, met à jour l'état pour indiquer que la mise à jour est terminée avec succès
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      // En cas d'échec de la mise à jour, met à jour l'état pour indiquer que la mise à jour a échoué
      return { ...state, loadingUpdate: false };
    default:
      // Par défaut, renvoie simplement l'état inchangé
      return state;
  }
};

// Définition de la fonction ProfileScreen
export default function ProfileScreen() {
  // Utilisation du contexte pour accéder aux données globales de l'application
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  // Initialisation des états locaux avec les informations du profil de l'utilisateur
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Utilisation du hook useReducer pour gérer l'état local lié à la mise à jour
  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  // Fonction de gestion de la soumission du formulaire de mise à jour du profil
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Effectue une requête PUT pour mettre à jour le profil de l'utilisateur
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      // Déclenche une action de succès de la mise à jour
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      // Met à jour les données de l'utilisateur dans l'état global
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // Stocke les nouvelles informations de l'utilisateur dans le stockage local
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Affiche un message de succès
      toast.success('User updated successfully');
    } catch (err) {
      // En cas d'erreur, déclenche une action d'échec de la mise à jour
      dispatch({
        type: 'FETCH_FAIL',
      });
      // Affiche un message d'erreur
      toast.error(getError(err));
    }
  };

  // ...

  const deleteAccountHandler = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        // Effectuez la requête DELETE pour supprimer le compte utilisateur
        await axios.delete('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        // Après la suppression réussie, déconnectez l'utilisateur en appelant l'action de déconnexion
        ctxDispatch(logoutAction());

        // Supprimez également les informations de l'utilisateur dans le stockage local si nécessaire
        localStorage.removeItem('userInfo');

        window.location.reload();
        // Affichez un message de succès
        toast.success('Account deleted successfully');
      } catch (err) {
        // En cas d'erreur, affichez un message d'erreur
        toast.error(getError(err));
      }
    }
  };

  // Rendu du composant ProfileScreen
  return (
    <div className="container small-container">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className="my-3">User Profile</h1>
      <form onSubmit={submitHandler}>
        {/* Champ de formulaire pour le nom */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        {/* Champ de formulaire pour l'e-mail */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        {/* Champ de formulaire pour le mot de passe */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* Champ de formulaire pour la confirmation du mot de passe */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        {/* Bouton de soumission du formulaire */}
        <div className="mb-3">
          <Button type="submit">Update</Button>
        </div>
      </form>
      <div className="mb-3">
        <Button variant="danger" onClick={deleteAccountHandler}>
          Delete Account
        </Button>
      </div>
    </div>
  );
}
