import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
const app = express();
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

app.use('/api/auth', authRoutes);


// Error handler
app.use(errorHandler);

export default app;
