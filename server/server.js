const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json({ limit: '50mb' }))
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const blogRoutes = require('./routes/blogRoutes')
server.use('/api/v1/blog', blogRoutes)
const authRoutes = require('./routes/auth')
server.use('/api/v1/blog', authRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

module.exports = server
