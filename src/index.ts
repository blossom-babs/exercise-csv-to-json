import express, { Request, Response, NextFunction } from 'express';
import csvtojson from 'csvtojson';
import { promises as fspromises } from 'fs';

const app = express();
const port = 3000;

const csvFilePath = './src/files/userData.csv';
const jsonFilePath = './src/files/userData.json';

export const fileConverter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const convertedFile = await csvtojson().fromFile(csvFilePath);
  convertedFile.filter((item) => {
    if (item.phone === undefined) {
      item.phone = 'missing data';
    }
  });
  await fspromises.writeFile(jsonFilePath, JSON.stringify(convertedFile));
  res.send(convertedFile);
  next();
};

app.get('/convert', fileConverter, (req, res) => {
  fileConverter;
});

app.listen(port, () => console.log('server is listening on port', port));

export default app;
