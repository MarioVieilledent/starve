import express from 'express';

const app: express.Application = express();
const port = 3000;

const animals = ['elephant', 'crab', 'dolphin', 'turtle', 'gopher'];

app.use(express.static('./client/dist'));

app.get('/animals', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(animals));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});