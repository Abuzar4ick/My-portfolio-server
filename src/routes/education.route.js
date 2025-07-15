const { Router } = require('express')
const router = Router()
const { newEducation, allEducation, deleteEducation } = require('../controllers/education.controller')
const authorization = require('../middlewares/authorization')

router.post('/education', authorization, newEducation)
router.get('/education', allEducation)
router.delete('/education/:id', authorization, deleteEducation)

module.exports = router