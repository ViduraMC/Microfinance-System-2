// server/scripts/addCustomer.js
const mongoose = require('mongoose');
const Customer = require('../models/Customer');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Customer.create({ name: 'Test User', email: 'test@example.com' });
    console.log("✅ Test customer added");
    process.exit();
  })
  .catch(console.error);
