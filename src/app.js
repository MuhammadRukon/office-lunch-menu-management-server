const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
const app = express();
const lunchRoutes = require("./routes/lunch/index.js")

applyMiddleware(app);

app.use(lunchRoutes)
// server health
app.get('/', (req, res) => {
    res.send("root route");
  })

app.get("/health", (req, res) => {
    res.send("Lunch management running");
  });

//   basic error handling
app.all("*", (req, res, next) => {
  const error = new Error(`The request url "${req.url}" is invalid.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;