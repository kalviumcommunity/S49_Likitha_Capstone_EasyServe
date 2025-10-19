const express = require('express');
const { getAgents, addAgent, updateAgent } = require('../controllers/agentController');
const router = express.Router();

router.get('/', getAgents);
router.post('/', addAgent);
router.put('/:id', updateAgent);

module.exports = router;
