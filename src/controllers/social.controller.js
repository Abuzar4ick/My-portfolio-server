const { socialService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /social-networks
exports.newSocial = asyncHandler(async (req, res, next) => {
    const response = await socialService.createSocialNetworks(req.body)
    res.status(201).json(response)
})

// GET: /social-networks
exports.allSocial = asyncHandler(async (req, res, next) => {
    const response = await socialService.getSocialNetworks()
    res.status(200).json(response)
})