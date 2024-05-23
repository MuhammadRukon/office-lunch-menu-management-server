const express = require("express");
const addMenu = require("../../api/lunch/controllers/addMenu.js");
const router = express.Router();

router.post("/add-menu", addMenu);


module.exports = router;
