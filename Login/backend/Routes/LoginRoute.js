const express = require("express");
const router = express.Router();
const LoginCtrl = require("../Controllers/LoginCtrl");

router.post("/login", LoginCtrl.login);

module.exports = router; 