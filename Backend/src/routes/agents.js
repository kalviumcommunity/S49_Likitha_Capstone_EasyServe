const express = require('express');
const router = express.Router();
const agents = require('../data/agentsData');

router.get('/', (req, res) => {
    res.json(agents);
});

module.exports = router;
