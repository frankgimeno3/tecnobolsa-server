// app.js
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app 