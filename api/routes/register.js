const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /register'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /register'
    });
});

router.get('/available/username/:username', (req, res, next) => {
    const username = req.params.username;

    res.status(200).json({
        available: true,
        username: username
    });
});

router.get('/available/email/:email', (req, res, next) => {
    const email = req.params.email;

    res.status(200).json({
        available: true,
        email: email
    });
});


module.exports = router;