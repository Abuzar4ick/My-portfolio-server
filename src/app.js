const express = require('express')
const app = express()
const cors = require('cors')
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
  cors({
    origin: 'https://abuzarr.netlify.app',
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