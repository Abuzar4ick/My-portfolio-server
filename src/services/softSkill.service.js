const { SoftSkill } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')

// POST: /soft-skills
// For: admin
exports.createSoftSkill = async (title) => {
    await SoftSkill.create({ title })
    return { success: true, message: 'New soft skill created successfully' }
}

// GET: /soft-skills
// For: admin && user
exports.getSoftSkills = async () => {
    const softSkills = await SoftSkill.find()
    return { success: true, data: softSkills }
}

// DELETE: /soft-skills/:id
// For: admin
exports.deleteSoftSkill = async (id) => {
    const deletedSoftSkill = await SoftSkill.findByIdAndDelete(id)
    if (!deletedSoftSkill) throw new ErrorResponse('Soft skill not found', 404);

    return { success: true, message: 'Soft skill deleted successfully' }
}