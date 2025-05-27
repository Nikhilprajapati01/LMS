const express = require('express');
const cookieParser = require('cookie-parser');
const { errormiddleware, isloggedin } = require('./middlewares/auth-middleware');
const bodyparser = require('body-parser');
const route = require('./router/auth-router');

const app = express();

app.use(cookieParser());          // <-- fix here
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Public routes:
app.use('/api/v1', route);

// Example protected route inside router should use `isloggedin` middleware

app.get('/', (req, res) => {
  res.json("hello");
});

// Error handling middleware (last)
app.use(errormiddleware);

module.exports = app;
