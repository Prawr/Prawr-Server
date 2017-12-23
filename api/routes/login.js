const express = require('express');
const router = express.Router();

/* ToDo */
router.get('/', (req, res, next)=> {
    res.status(200).json({
        code: 200
    });
});

module.exports = router;