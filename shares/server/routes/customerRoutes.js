const express = require('express');
const { getAllCustomers } = require('../controllers/customerController');
const router = express.Router();

router.get('/', getAllCustomers);

module.exports = router;
