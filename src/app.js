const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const errorHandler = require('./middlewares/errorHandler')
const {
  profileInfoRoute,
  socialRoute,
  projectRoute,
  experienceRoute,
  educationRoute,
  skillRoute,
  softSkillRoute,
  registerRoute,
  dashboardRoute
} = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
  })
)
app.use(
  cors({
    origin: [
      'https://abuzarr.netlify.app',
      'http://localhost:5173'
    ],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'DELETE', 'PUT']
  })
)

app.use('/api',
  profileInfoRoute,
  socialRoute,
  projectRoute,
  experienceRoute,
  educationRoute,
  skillRoute,
  softSkillRoute,
  registerRoute,
  dashboardRoute
)

// Error handler
app.use(errorHandler)

module.exports = app