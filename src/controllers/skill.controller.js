const { skillService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /skills
exports.newSkill = asyncHandler(async (req, res, next) => {
    const response = await skillService.createSkill(req.body, req.file.filename)
    res.status(201).json(response)
})

// GET: /skills
exports.allSkills = asyncHandler(async (req, res, next) => {
    const response = await skillService.getSkills()
    res.status(200).json(response)
})

// DELETE: /skills/:id
exports.deleteSkill = asyncHandler(async (req, res, next) => {
    const response = await skillService.deleteSkill(req.params.id)
    res.status(200).json(response)
})