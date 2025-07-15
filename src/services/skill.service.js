const { Skill } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')
const { cloudinary } = require('../storage/cloudinary')

// POST: /skills
// For: admin
exports.createSkill = async (skill, image) => {
    const { title, back_color, projects } = skill

    await Skill.create({ image, title, back_color, projects })
    return { success: true, message: 'New skill created successfully' }
}

// GET: /skills
// For: admin && user
exports.getSkills = async () => {
    const response = await Skill.find()
    return { success: true, data: response }
}

// DELETE: /skills/:id
// For: admin
exports.deleteSkill = async (id) => {
    const deletedSkill = await Skill.findByIdAndDelete(id)
    if (!deletedSkill) throw new ErrorResponse('Skill not found', 404);

    await cloudinary.uploader.destroy(deletedSkill.image)
    return { success: true, message: 'Skill deleted successfully' }
}