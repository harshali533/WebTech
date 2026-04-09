// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Get current date and time
    const now = new Date();

    // Send response
    res.write("Hello\n");
    res.write("Current Date and Time: " + now);

    res.end();
});

// Run server on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});