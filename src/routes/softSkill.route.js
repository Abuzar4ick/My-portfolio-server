const { Router } = require('express')
const router = Router()
const { newSoftSkill, allSoftSkills, deleteSoftSkill } = require('../controllers/softSkill.controller')
const authorization = require('../middlewares/authorization')

router.post('/soft-skills', authorization, newSoftSkill)
router.get('/soft-skills', allSoftSkills)
router.delete('/soft-skills/:id', authorization, deleteSoftSkill)

module.exports = router