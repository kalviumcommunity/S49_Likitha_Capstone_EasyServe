const express = require('express');
const router = express.Router();
let agents = require('../data/agentsData');

// GET all agents
router.get('/', (req, res) => {
    res.json(agents);
});

// POST a new agent
router.post('/', (req, res) => {
    const newAgent = req.body;

    if (!newAgent.name || !newAgent.service || !newAgent.location || !newAgent.rating) {
        return res.status(400).json({ message: "All fields are required (name, service, location, rating)" });
    }

    newAgent.id = agents.length + 1;
    agents.push(newAgent);

    res.status(201).json({ message: "Agent added successfully", newAgent });
});

module.exports = router;
