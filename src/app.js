import express from 'express';
import cors from 'cors';

import { homeRouter } from './routes/home.route';
import { cryptocurrenciesRouter } from './routes/cryptocurrencies.route';

const app = express();

// Middlewares
app.use(cors());

// Routes
app.use('/', homeRouter);
app.use('/cryptocurrencies', cryptocurrenciesRouter)

export { app };