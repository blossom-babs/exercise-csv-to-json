import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3000;

const converter = (req: Request, res: Response, next: NextFunction) => {
  res.send(req.url);
  next()
};

app.get('/conver', converter, (req, res) => {
  res.json({ id: 'this is the entry page' });
});

app.listen(port, () => console.log('server is live on port', port));

export default app;
