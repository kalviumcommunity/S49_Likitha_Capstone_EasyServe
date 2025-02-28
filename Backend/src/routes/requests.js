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

    newRequest.id = requests.length + 101;
    requests.push(newRequest);

    res.status(201).json({ message: "Service request added successfully", newRequest });
});

// PUT (Update) a service request by ID
router.put('/:id', (req, res) => {
    const requestId = parseInt(req.params.id);
    const updatedRequest = req.body;

    const requestIndex = requests.findIndex(request => request.id === requestId);

    if (requestIndex === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[requestIndex] = { ...requests[requestIndex], ...updatedRequest };

    res.json({ message: "Service request updated successfully", updatedRequest: requests[requestIndex] });
});

module.exports = router;
