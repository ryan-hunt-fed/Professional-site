const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const blogRoutes = require('./routes/blogRoutes')
server.use('/api/v1/blog', blogRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

module.exports = server
