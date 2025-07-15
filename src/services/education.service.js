const { Education } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')

// POST: /education
// For: admin
exports.createEducation = async (education) => {
    const { time_length, role, place_name } = education

    await Education.create({ time_length, role, place_name })
    return { success: true, message: 'New education information created successfully' }
}

// GET: /education
// For: admin && user
exports.getEducations = async () => {
    const educations = await Education.find()
    return { success: true, data: educations }
}

// DELETE: /education/:id
// For: admin
exports.deleteEducation = async (id) => {
    const deletedEducation = await Education.findByIdAndDelete(id)
    if (!deletedEducation) throw new ErrorResponse(id)
    
    return { success: true, message: 'Education information deleted successfully' }
}