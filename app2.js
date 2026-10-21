
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My HTML Table</title>
        </head>
        <body>
            <h1>My Computer Science Table</h1>
            <table border="1">
                <tr>
                    <th>Course</th>
                    <th>Technology</th>
                </tr>
                <tr>
                    <td>Computer Science</td>
                    <td>JavaScript</td>
                </tr>
                <tr>
                    <td>Web Development</td>
                    <td>Node.js</td>
                </tr>
                <tr>
                    <td>Software Engineering</td>
                    <td>HTML</td>
                </tr>
            </table>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3001/');
});
