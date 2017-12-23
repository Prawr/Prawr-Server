const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import model
const User = require('../models/user');

/**
 * Checks if a name is still available for registration
 */
router.get('/name-available/:name', (req, res, next) => {
    const name = req.params.name;
    
    User.find({
        name
    }).then( document => {

        let available = document.length === 0;

        // Return data with code 200
        res.status(200).json({
            name,
            available
        });
    }).catch( error => {

        console.error(error);
        // Otherwise return error data with internal server error code
        res.status(500).json({error});
    });
});

module.exports = router;