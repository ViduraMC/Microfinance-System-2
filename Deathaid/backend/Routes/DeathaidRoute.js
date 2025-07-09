const express = require("express");
const router = express.Router();
const Deathaid = require("../Model/DeathaidModel");
const DeathaidCtrl = require("../Controllers/DeathaidCtrl");


router.get("/",DeathaidCtrl.getAllDetails);
router.post("/",DeathaidCtrl.addDetails);
router.get("/:id",DeathaidCtrl.getById);
router.put("/:id",DeathaidCtrl.updateById);
router.delete("/:id",DeathaidCtrl.deleteById);

//export the router
module.exports=router;