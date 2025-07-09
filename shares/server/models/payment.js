const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  amount: Number,
  fine: { type: Number, default: 0 },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Payment', PaymentSchema);
