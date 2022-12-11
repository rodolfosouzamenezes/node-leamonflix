import express from 'express';
import cors from 'cors';
import movieController  from './controllers/MovieController';

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors())

app.listen(port, () => {
  console.log(`A API está rodando na porta ${port}: http://localhost:${port}/`)
})

app.get('/', movieController.main);

app.get('/:movieId', movieController.details);