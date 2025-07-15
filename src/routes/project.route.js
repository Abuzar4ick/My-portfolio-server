const { Router } = require('express')
const router = Router()
const { newProject, deleteProject, allProjects, oneProject } = require('../controllers/project.controller')
const authorization = require('../middlewares/authorization')
// multer (file upload)
const multer = require('multer')
const { storage } = require('../storage/cloudinary')
const upload = multer({ storage })

router.post('/projects', authorization, upload.single('image'), newProject)
router.delete('/projects/:id', authorization, deleteProject)
router.get('/projects', allProjects)
router.get('/projects/:id', oneProject)

module.exports = router