const express = require('express');
const router = express.Router();
let requests = require('../data/requestsData');

// GET all service requests
router.get('/', (req, res) => {
    res.json(requests);
});

// POST a new service request
router.post('/', (req, res) => {
    const newRequest = req.body;

    if (!newRequest.customer || !newRequest.service || !newRequest.status) {
        return res.status(400).json({ message: "All fields are required (customer, service, status)" });
    }

    newRequest.id = requests.length + 101; // Unique ID starting from 101
    requests.push(newRequest);

    res.status(201).json({ message: "Service request added successfully", newRequest });
});

module.exports = router;
