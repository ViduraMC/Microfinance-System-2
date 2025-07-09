const express = require("express");
const router = express.Router();
//Insert model//
const User = require("../models/Usermodel");

//Insert User Controller//
const Usercontrol = require("../controllers/Usercontrol");
router.get("/",Usercontrol.getAllUsers);
router.post("/",Usercontrol.addUsers);
router.get("/:id",Usercontrol.getById);
router.put("/:id",Usercontrol.updateUser);
router.delete("/:id",Usercontrol.deleteUser);

//export
module.exports = router;
