// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response to browser
    res.end('Hello there ✨🫡! This is my Tiny HTTP Server in Node.js');
});

// Define port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});