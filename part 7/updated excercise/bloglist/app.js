const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')

const app = express()
app.use(middleware.tokenExtractor)

mongoose.connect(config.MONGODB_URI)

app.use(express.json())
app.use(express.static('dist'))

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// Catch-all route to serve the React app for non-API requests
app.get('/(.*)', (req, res) => {
  if (req.path.startsWith('/api/')) {
    res.status(404).send({ error: 'unknown endpoint' })
  } else {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
  }
})

module.exports = app
