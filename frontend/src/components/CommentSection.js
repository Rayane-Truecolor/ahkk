import React, { useState, useEffect } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Charger les commentaires depuis le serveur lors du montage du composant
    fetch('/api/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) =>
        console.error('Erreur lors du chargement des commentaires', error)
      );
  }, []);

  const handleCommentSubmit = () => {
    // Valider que le commentaire n'est pas vide
    if (!newComment.trim()) {
      console.error('Le commentaire ne peut pas être vide');
      return;
    }

    // Envoyer le commentaire au serveur sous forme de texte brut
    fetch('/api/comments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain', // Utiliser 'text/plain' pour indiquer que vous envoyez du texte brut
      },
      body: newComment,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.text(); // Traiter la réponse comme du texte brut
      })
      .then((data) => {
        // Traiter la réponse selon vos besoins (éventuellement, mettre à jour l'état, etc.)
        console.log('Réponse du serveur:', data);
        // Exemple : mettre à jour l'état des commentaires avec la réponse du serveur
        const updatedComments = [...comments, { text: data }];
        setComments(updatedComments);
        setNewComment('');
      })
      .catch((error) =>
        console.error("Erreur lors de l'envoi du commentaire", error)
      );
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <textarea
        rows="4"
        cols="50"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
}

export default CommentSection;
