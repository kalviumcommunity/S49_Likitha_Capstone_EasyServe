const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/agents', require('./routes/agents'));
app.use('/api/requests', require('./routes/requests'));

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
