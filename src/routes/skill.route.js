const { Router } = require('express')
const router = Router()
const { newSkill, allSkills, deleteSkill } = require('../controllers/skill.controller')
const authorization = require('../middlewares/authorization')
// multer (file upload)
const multer = require('multer')
const { storage } = require('../storage/cloudinary')
const upload = multer({ storage })

router.post('/skills', authorization, upload.single('image'), newSkill)
router.get('/skills', allSkills)
router.delete('/skills/:id', authorization, deleteSkill)

module.exports = router