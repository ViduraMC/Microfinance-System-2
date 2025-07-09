const express = require('express');
const paymentController = require('../controllers/paymentController'); // Import the full controller

const router = express.Router();

// Routes
router.post('/', paymentController.addPayment);
router.get('/:customerId', paymentController.getCustomerPayments);
router.put('/:id', paymentController.updatePayment);      // ✅ Update payment
router.delete('/:id', paymentController.deletePayment);   // ✅ Delete payment

module.exports = router;
