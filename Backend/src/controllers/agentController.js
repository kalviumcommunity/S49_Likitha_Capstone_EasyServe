const Agent = require('../models/Agent');

exports.getAgents = async (req, res) => {
    try {
        const agents = await Agent.find();
        res.json(agents);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.addAgent = async (req, res) => {
    try {
        const { name, service, location, rating } = req.body;
        if (!name || !service || !location || rating == null) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const newAgent = new Agent({ name, service, location, rating });
        await newAgent.save();
        res.status(201).json({ message: "Agent added successfully", newAgent });
    } catch (error) {
        res.status(500).json({ message: "Error adding agent" });
    }
};

exports.updateAgent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAgent = await Agent.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedAgent) {
            return res.status(404).json({ message: "Agent not found" });
        }

        res.json({ message: "Agent updated successfully", updatedAgent });
    } catch (error) {
        res.status(500).json({ message: "Error updating agent" });
    }
};
