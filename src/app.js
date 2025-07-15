const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const session = require('express-session')
const {
  profileInfoRoute,
  socialRoute,
  projectRoute,
  experienceRoute,
  educationRoute,
  skillRoute,
  softSkillRoute,
  registerRoute
} = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Session config
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

app.use('/api',
  profileInfoRoute,
  socialRoute,
  projectRoute,
  experienceRoute,
  educationRoute,
  skillRoute,
  softSkillRoute,
  registerRoute
)

// Error handler
app.use(errorHandler)

module.exports = app