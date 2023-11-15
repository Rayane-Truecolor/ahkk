// commentRoutes.js
import express from 'express';
import { getComments, createComment } from '../data.js';

const commentRoutes = express.Router();

// Route pour obtenir tous les commentaires
commentRoutes.get('/', async (req, res, next) => {
  try {
    const comments = await getComments();
    res.json(comments);
  } catch (error) {
    next(error);
  }
});

// Route pour créer un nouveau commentaire
commentRoutes.post('/', async (req, res, next) => {
  const { text, parentId } = req.body;
  try {
    const comment = await createComment(text, parentId);
    res.json(comment);
  } catch (error) {
    next(error);
  }
});

export default commentRoutes;
