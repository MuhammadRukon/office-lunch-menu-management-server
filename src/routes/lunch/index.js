const express = require("express");
const addMenu = require("../../api/lunch/controllers/addMenu.js");
const getMenu = require("../../api/lunch/controllers/getMenu.js");
const selectLunch = require("../../api/lunch/controllers/selectLunch.js");
const router = express.Router();

router.post("/add-menu", addMenu);
router.post("/menu", getMenu);
router.post('/select-lunch', selectLunch);

module.exports = router;
