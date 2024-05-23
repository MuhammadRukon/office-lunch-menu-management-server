const express = require("express");
const addMenu = require("../../api/lunch/controllers/addMenu.js");
const getMenu = require("../../api/lunch/controllers/getMenu.js");
const router = express.Router();

router.post("/add-menu", addMenu);
router.get("/menu", getMenu);

module.exports = router;
