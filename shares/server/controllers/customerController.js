const Customer = require('../models/customer');

exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};
