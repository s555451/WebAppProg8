
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server =
  http.createServer(
    (req,res)=> {
      console.log("Request recieved")
      console.log(req.url)

      // Build a fake url so we can get the search parameters using a URL object
      fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

      console.log("Queries: " + search_params)

      if (req.method === 'GET' ) {

          console.log("Look for query parameter data: " + search_params.get("data"))

          // Process the queries here
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/plain')
          res.write("You rang?")
          res.end();

      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }
)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
