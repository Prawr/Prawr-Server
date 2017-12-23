const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import models
const User = require('../models/user');

router.post('/create', (req, res, next) => {
    const params = req.params;
});



module.exports = router;