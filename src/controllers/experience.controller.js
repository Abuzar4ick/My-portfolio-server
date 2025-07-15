const { experienceService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /work-experience
exports.newExperience = asyncHandler(async (req, res, next) => {
    const response = await experienceService.createExperience(req.body)
    res.status(201).json(response)
})

// GET: /work-experience
exports.allExperience = asyncHandler(async (req, res, next) => {
    const response = await experienceService.getAllExperience()
    res.status(200).json(response)
})

// DELETE: /work-experience
exports.deleteExperience = asyncHandler(async (req, res, next) => {
    const response = await experienceService.deleteExperience(req.params.id)
    res.status(200).json(response)
})