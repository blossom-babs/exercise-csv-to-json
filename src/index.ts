import express, { Request, Response, NextFunction } from 'express';
import csvtojson from 'csvtojson';

const app = express();
const port = 3000;

console.log(csvtojson());

const converter = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ id: 'Blossom, res cannot send back res' });
  next();
};

app.get('/convert', converter, (req, res) => {
  console.log('');
});

app.listen(port, () => console.log('server is listening on port', port));

export default app;
