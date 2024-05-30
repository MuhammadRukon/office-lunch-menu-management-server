const express = require("express");
const register = require("./../../api/authentication/controllers/register.js");
const login = require("./../../api/authentication/controllers/login.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
module.exports = router;
