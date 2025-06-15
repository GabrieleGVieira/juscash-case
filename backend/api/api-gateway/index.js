import express from 'express';
import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
import processRoutes from './routes/processRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

// app.use('/api/auth', authRoutes);
app.use('/api/process', processRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway rodando na porta ${PORT}`));
