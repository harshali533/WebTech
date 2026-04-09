const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Middleware executed at:", new Date());
    next();   // move to next route
});

// Route 1
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// Route 2
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});