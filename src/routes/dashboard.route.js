const { Router } = require('express')
const router = Router()
const { allInformationLength } = require('../controllers/dashboard.controller')
const authorization = require('../middlewares/authorization')

router.get('/all-info/length', authorization, allInformationLength)

module.exports = router