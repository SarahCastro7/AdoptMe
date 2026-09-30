import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animalRoutes.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' })); // fotos chegam em base64

app.use('/api', animalRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API rodando em http://localhost:${port}/api`));
