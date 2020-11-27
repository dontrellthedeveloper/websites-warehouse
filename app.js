const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const websiteRouter = require('./routes/websiteRoutes');
const userRouter = require('./routes/userRoutes');
const purchaseRouter = require('./routes/purchaseRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1. Global Middleware
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *

app.options('*', cors());

// Serving static files
app.use(express.static(path.join(`${__dirname}/public`)));

// Set security HTTP headers
app.use(helmet());

app.use(compression());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb'}));
app.use(express.urlencoded({extended: true, limit: '10kb'}));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp({
    whitelist: [
        'price'
    ]
}));

// // Serving static files
// app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.cookies);
    next();
});





// 3. Routes
// app.get('/', (req,res) => {
//     res.status(200).render('base');
// });

// app.get('/overview', (req,res) => {
//     res.status(200).render('overview', {
//         title: 'All Websites'
//     });
// });
//
// app.get('/website', (req,res) => {
//     res.status(200).render('website', {
//         title: 'Beverly Hills Models'
//     });
// });

app.use('/', viewRouter);
app.use('/api/v1/websites', websiteRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/purchases', purchaseRouter);

app.all('*', (req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;