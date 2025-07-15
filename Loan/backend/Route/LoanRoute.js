const express = require("express");
const router = express.Router();
//Insert model

const Loan = require("../Model/LoanModel");

//Insert User Controller

const LoanController = require("../Controllers/LoanController");

router.get("/",LoanController.getAllLoans);
router.post("/",LoanController.addLoan);
router.get("/:id",LoanController.getById);
router.put("/:id",LoanController.updateLoan);
router.delete("/:id",LoanController.deleteLoan);
//export
module.exports = router;
