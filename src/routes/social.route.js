const { Router } = require('express')
const router = Router()
const { newSocial, allSocial } = require('../controllers/social.controller')
const authorization = require('../middlewares/authorization')

router.post('/social-networks', authorization, newSocial)
router.get('/social-networks', allSocial)

module.exports = router