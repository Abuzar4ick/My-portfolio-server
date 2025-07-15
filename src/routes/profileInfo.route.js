const { Router } = require('express')
const router = Router()
const { newProfile, updatedProfile, getProfile } = require('../controllers/profileInfo.controller')
const authorization = require('../middlewares/authorization')
// multer (file upload)
const multer = require('multer')
const { storage } = require('../storage/cloudinary')
const upload = multer({ storage })

router.post('/profile/info', authorization, upload.single('image'), newProfile)
router.put('/profile/info', authorization, upload.single('image'), updatedProfile)
router.get('/profile/info', getProfile)

module.exports = router