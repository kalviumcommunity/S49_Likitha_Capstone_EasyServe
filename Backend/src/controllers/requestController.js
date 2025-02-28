const Request = require('../models/Request');

// Get all service requests
exports.getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add a new service request
exports.addRequest = async (req, res) => {
    try {
        const { customer, service, status } = req.body;
        if (!customer || !service || !status) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const newRequest = new Request({ customer, service, status });
        await newRequest.save();
        res.status(201).json({ message: "Service request added successfully", newRequest });
    } catch (error) {
        res.status(500).json({ message: "Error adding request" });
    }
};

// Update a service request
exports.updateRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRequest = await Request.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedRequest) {
            return res.status(404).json({ message: "Request not found" });
        }

        res.json({ message: "Service request updated successfully", updatedRequest });
    } catch (error) {
        res.status(500).json({ message: "Error updating request" });
    }
};
