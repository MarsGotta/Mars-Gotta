const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })

  server.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
  server.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  server.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  server.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
})