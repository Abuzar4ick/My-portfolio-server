const { Router } = require('express')
const router = Router()
const { register, logout } = require('../controllers/register.controller')

router.post('/admin-register', register)
router.post('/admin-logout', logout)

module.exports = router