import express, { Request, Response } from 'express';
import movieController  from './controllers/MovieController';

const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`A API está rodando na porta ${port}: http://localhost:${port}/`)
})

app.get('/', movieController.main);

app.get('/:movieId', movieController.details);