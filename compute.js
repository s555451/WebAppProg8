
const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1:3001');
    const x = Number(url.searchParams.get('x'));
    const y = Number(url.searchParams.get('y'));

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'GET') {
        const resultX = Math.abs(x);
        const resultY = Math.abs(y);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`f(${x}) is ${resultX} and f(${y}) is ${resultY}`);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Compute server running at http://127.0.0.1:3001/');
});
