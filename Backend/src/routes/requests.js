const express = require('express');
const router = express.Router();
const requests = require('../data/requestsData');

router.get('/', (req, res) => {
    res.json(requests);
});

module.exports = router;
