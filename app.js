const express = require('express');
const morgan = require('morgan');

const app = express();

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const websiteRouter = require('./routes/websiteRoutes');
const userRouter = require('./routes/userRoutes');

// 1. Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));



// 2. Routes

app.use('/api/v1/websites', websiteRouter);
app.use('/api/v1/users', userRouter);


app.all('*', (req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);




module.exports = app;