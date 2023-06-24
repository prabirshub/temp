const http = require('http')

const server = http.createServer((req, res) => {
  res.end('This is a home page')
})

server.listen(5000, () => {
  console.log('Server is running in port 5000...')
})
