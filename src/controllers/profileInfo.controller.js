const { profileInfoService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /profile/info
// For: admin
exports.newProfile = asyncHandler(async (req, res, next) => {
    const response = await profileInfoService.createInfo(req.body, req.file.filename)
    res.status(201).json(response)
})

// PUT: /profile/info
// For: admin
exports.updatedProfile = asyncHandler(async (req, res, next) => {
    const response = await profileInfoService.updateProfile(req.body, req.file.filename)
    res.status(200).json(response)
})

// GET: /profile/info
// For: admin && user
exports.getProfile = asyncHandler(async (req, res, next) => {
    const response = await profileInfoService.getProfileInfo()
    res.status(200).json(response)
})