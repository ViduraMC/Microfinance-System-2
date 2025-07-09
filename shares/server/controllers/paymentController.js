const Payment = require('../models/payment');
const Customer = require('../models/customer');

// ✅ Add a payment
exports.addPayment = async (req, res) => {
  try {
    const { customerId, amount, fine, date } = req.body;
    const payment = new Payment({ customerId, amount, fine, date });
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    console.error("Error adding payment:", err);
    res.status(500).json({ message: 'Failed to add payment' });
  }
};

// ✅ Get payment history for a customer
exports.getCustomerPayments = async (req, res) => {
  try {
    const { customerId } = req.params;
    const payments = await Payment.find({ customerId }).sort({ date: 1 }).populate('customerId');

    let totalShares = 0;
    let totalFine = 0;

    const history = payments.map((p) => {
      const amount = typeof p.amount === 'number' && !isNaN(p.amount) ? p.amount : '-';
      const fine = typeof p.fine === 'number' && !isNaN(p.fine) ? p.fine : 0;

      if (typeof p.amount === 'number' && !isNaN(p.amount)) {
        totalShares += p.amount;
      }

      totalFine += fine;

      return {
        _id: p._id,
        date: p.date?.toISOString().split('T')[0] || '-',
        name: p.customerId?.name || '-',
        amount,
        totalShares,
        fine: fine === 0 ? '-' : fine,
        totalFine
      };
    });

    res.status(200).json(history);
  } catch (err) {
    console.error("Error fetching payments:", err);
    res.status(500).json({ message: 'Failed to get payment history' });
  }
};

// ✅ Delete a payment by ID
exports.deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Payment.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Delete failed' });
  }
};

// ✅ Update a payment by ID
exports.updatePayment = async (req, res) => {
  try {
    const { amount, fine, date } = req.body;
    const updated = await Payment.findByIdAndUpdate(
      req.params.id,
      { amount, fine, date },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Error updating payment" });
  }
};

// ✅ Test route (Optional)
exports.baseRoute = (req, res) => {
  res.status(200).json({ message: "Payment API base route working" });
};
