const express = require('express');
const morgan = require('morgan');

const app = express();


// 1. Middleware
app.use(morgan('dev'));
app.use(express.json());


// 2. Route Handlers
const websiteRouter = require('./routes/websiteRoutes');
const userRouter = require('./routes/userRoutes');



// 3. Routes

app.use('/api/v1/websites', websiteRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;