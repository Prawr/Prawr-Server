const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jsonWebToken = require('jsonwebtoken');
const config = require('../../config');

const User = require('../models/user');

/**
 * Authenticates a user, who passes username + pwd
 * by giving a token back
 */
router.post('/', (req, res, next) => {

    // Read from JSON-body
    const name = req.body.username;
    const password = req.body.password;
    
    // Find user
    User.findOne({
        name
    },
    // On complete
    (error, user) => {
        if (error) throw error;

        // If user doesn't exist
        if(!user) {

            res.json({
                success: false,
                type: 'USERNAME_INVALID',
                errorType: 'red'
            });

        // If user exists
        } else if (user) {

            // Check for password match
            if ( !passwordHash.verify(password, user.passwordHash) ) {
                
                res.json({
                    success: false,
                    type: 'PASSWORD_INVALID',
                    errorType: 'red'
                });

            // Credentials are correct
            } else {

                // Store in session
                const payload = {
                    username: user.name,
                    roles: user.roles,
                    email: user.email,
                    accountStatus: user.accountStatus,
                    avatar: user.avatar,
                    profile: user.profile
                };

                let token = jsonWebToken.sign(payload, config.authSecret, {
                    expiresIn: '2 days' // Valid for 48 hours
                });

                // Return success with token
                res.json({
                    success: true,
                    type: 'TOKEN_GRANT',
                    token
                });

            }
        }

    });

});

module.exports = router;