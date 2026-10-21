
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Fun fact: I am a Computer Science student who enjoys coding and building web applications!');
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3001/');
});
