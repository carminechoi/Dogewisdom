import express from 'express';
import cors from 'cors';

import { homeRouter } from './routes/home.route';
import { cryptocurrenciesRouter } from './routes/cryptocurrencies.route';
import { userRouter } from './routes/user.route';

const app = express();

// Middlewares
app.use(cors());

// Routes
app.use('/', homeRouter);
app.use('/cryptocurrencies', cryptocurrenciesRouter);
app.use('/api', userRouter);

console.log(app._router);

export { app };