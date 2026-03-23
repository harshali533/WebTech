const express = require('express'); //import express
const app = express(); //create express app
const PORT = 3000; //set server port

// Middleware to parse JSON bodies
app.use((req, res, next) => {
    console.log("Request received from client");
    next(); // go to the next middleware or route handler
});

//Route 1: Home route
app.get('/', (req, res) => {
    res.send('Welcome to My first Express Server!');
});

//Route 2: About route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

//Route 3: Contact route
app.get('/contact', (req, res) => {
    res.send('Contact us at harshalikamble.hli@gmail.com');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
