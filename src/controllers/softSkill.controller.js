const { softSkillService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /soft-skills
exports.newSoftSkill = asyncHandler(async (req, res, next) => {
    const response = await softSkillService.createSoftSkill(req.body.title)
    res.status(201).json(response)
})

// GET: /soft-skills
exports.allSoftSkills = asyncHandler(async (req, res, next) => {
    const response = await softSkillService.getSoftSkills()
    res.status(200).json(response)
})

// DELETE: /soft-skills/:id
exports.deleteSoftSkill = asyncHandler(async (req, res, next) => {
    const response = await softSkillService.deleteSoftSkill(req.params.id)
    res.status(200).json(response)
})