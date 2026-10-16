
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server =
  http.createServer(
    (req,res)=> {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')
      res.end('</body></html>')
      //Close the response
    }
)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
