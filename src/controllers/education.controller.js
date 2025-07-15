const { educationService } = require('../services')

// POST: /education
exports.newEducation = asyncHandler(async (req, res, next) => {
    const response = await educationService.createEducation(req.body)
    res.status(201).json(response)
})

// GET: /education
exports.allEducation = asyncHandler(async (req, res, next) => {
    const response = await educationService.getEducations()
    res.status(200).json(response)
})

// DELETE: /education/:id
exports.deleteEducation = asyncHandler(async (req, res, next) => {
    const response = await educationService.deleteEducation(req.params.id)
    res.status(200).json(response)
})