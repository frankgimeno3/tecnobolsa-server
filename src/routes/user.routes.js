// src/routes/userRoutes.js
import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
// router.get('/', authenticateToken, getUsers);
// router.get('/:id', authenticateToken, getUserById);
// router.patch('/:id', authenticateToken, updateUser);
// router.delete('/:id', authenticateToken, deleteUser);

router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;