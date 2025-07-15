const { Router } = require('express')
const router = Router()
const { newExperience, allExperience, deleteExperience } = require('../controllers/experience.controller')
const authorization = require('../middlewares/authorization')

router.post('/work-experience', authorization, newExperience)
router.get('/work-experience', allExperience)
router.delete('/work-experience/:id', authorization, deleteExperience)

module.exports = router