require('dotenv').config()

import express from 'express';
import routes from './routes/routes.js';

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}/`);
});