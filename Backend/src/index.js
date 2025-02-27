const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const agentsRoutes = require('./routes/agents');
const requestsRoutes = require('./routes/requests');

app.use('/api/agents', agentsRoutes);
app.use('/api/requests', requestsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
