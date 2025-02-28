const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    service: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'In Progress'], required: true }
});

module.exports = mongoose.model('Request', RequestSchema);
