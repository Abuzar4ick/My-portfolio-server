const { Experience } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')

// POST: /work-experience
// For: admin
exports.createExperience = async (experience) => {
    const { role, time_length, company_name, country, description } = experience

    await Experience.create({ role, time_length, company_name, country, description })
    return { success: true, message: 'New experience created successfully' }
}

// GET: /work-experience
// For: admin && user
exports.getAllExperience = async () => {
    const experiences = await Experience.find()
    return { success: true, data: experiences }
}

// DELETE: /work-experience/:id
// For: admin
exports.deleteExperience = async (id) => {
    const experience = await Experience.findByIdAndDelete(id)
    if (!experience) throw new ErrorResponse('Experience not found', 404);

    return { success: true, message: 'Experience deleted successfully' }
}