require('dotenv').config()

import express from 'express';
import routes from './routes/routes.js';

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}/`);
});