import express from 'express';

const app: express.Application = express();
const cors = require('cors');
const port = 3000;

const animals = ['elephant', 'crab', 'dolphin', 'turtle', 'gopher'];

app.use(express.static('./client/dist'));
app.use(cors());

app.get('/messages', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(animals));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});