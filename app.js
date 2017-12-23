const express = require('express');
// Routes
const loginRoutes = require('./api/routes/login');
const registerRoutes = require('./api/routes/register');

const app = express();

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

module.exports = app;