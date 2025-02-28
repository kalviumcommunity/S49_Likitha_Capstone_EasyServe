const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    service: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 }
});

module.exports = mongoose.model('Agent', AgentSchema);
