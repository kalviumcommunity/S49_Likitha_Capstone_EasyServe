const express = require('express');
const { getRequests, addRequest, updateRequest } = require('../controllers/requestController');
const router = express.Router();

router.get('/', getRequests);
router.post('/', addRequest);
router.put('/:id', updateRequest);

module.exports = router;
