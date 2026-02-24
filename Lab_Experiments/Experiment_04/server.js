const http = require('http');

const server = http.createServer((req, res) => {
    const now = new Date();

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, World!\n');
    res.write(`Current date and time: ${now.toISOString()}\n`);
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});