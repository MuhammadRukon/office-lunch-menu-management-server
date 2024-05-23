const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");


const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [process.env.LOCAL_CLIENT],
      credentials: true,
    })
  );
};

module.exports = applyMiddleware;