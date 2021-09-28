const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('You are at the homepage')
  }
  if (req.url === '/about') {
    res.end('About Us Page')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for is not found.</p>
    <a href='/'>Go to homepage</a>
  `)
})

server.listen(5000)
