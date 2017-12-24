const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const config = require('../../config');

// Import model
const User = require('../models/user');
const AccessStorage = require('../models/accessStorage');

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

/**
 * Checks if an email is still available for registration
 */
router.get('/email-available/:email', (req, res, next) => {
    const email = req.params.email;
    
    User.find({
        email
    }).then( document => {

        let available = document.length === 0;

        // Return data with code 200
        res.status(200).json({
            email,
            available
        });
    }).catch( error => {

        console.error(error);
        // Otherwise return error data with internal server error code
        res.status(500).json({error});
    });
});

/**
 * Finds a user, only views public available data,
 * no sensitive data
 */
router.get('/find/:name', (req, res, next) => {
    User
        .findOne({ name:req.params.name })
        .select("name usersFollowing avatar profile")
        .then( document => {
            // Remove id
            let preparedDocument = document.toObject();
            delete preparedDocument['_id'];
            // Send response
            res.status(200).json( preparedDocument );
        })
        .catch( error => {
            // Send error
            res.status(500).json({
                error
            });
        });
});

// Route for dev only to test
router.post('/create', (req, res, next) => {
    const body = req.body;

    // Find limitation storage
    AccessStorage.findOne({
        ipAddress: req.connection.ipAddress
    }).then( document => {
        if(document) {
            
            // if max uses are reached
            if(document.uses > config.accountLimit) {

                // if outdated
                if(document.expiration < Date.now()) {

                    AccessStorage.remove({_id: document._id }, error => {
                        if(error) console.error(error);
                    });

                // user has no permission
                } else {

                    return res.status(403).json({
                        success: false,
                        type: 'LIMIT_EXCEEDED'
                    });

                }

            } else {

                // increase accounts from ip and duration
                document.uses++;
                document.expiration = config.getSessionTime();

                document.save((error, updated)=>{

                    if(error) console.error(error);

                });
            }

        } else {

            // no accounts created yet, create new storage
            const document = new AccessStorage({
                _id: mongoose.Types.ObjectId(),
                ipAdress: req.connection.ipAddress
            });

            document.save((error, document) => {

                if(error) console.error(error);

            });
        }
    });

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: body.name,
        email: body.email,
        passwordHash: passwordHash.generate(body.password)
    });

    user.save().then( result => {
        result.success = true;
        res.status(201).json(result);
    }).catch( error => {
        error.success = false;
        res.status(500).json(error);
    });
});


module.exports = router;