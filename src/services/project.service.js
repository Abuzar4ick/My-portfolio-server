const { Project } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')
const { cloudinary } = require('../storage/cloudinary')

// POST: /projects
// For: admin
exports.createProject = async (project) => {
    const { title, tags, key_words, overview, challenge } = project

    await Project.create({ title, tags, key_words, overview, challenge })
    return { success: true, message: 'New project created successfully' }
}

// DELETE: /projects/:id
// For: admin
exports.deleteProject = async (id) => {
    const deletedProject = await Project.findByIdAndDelete(id)
    if (deletedProject) throw new ErrorResponse('Project not found', 404);

    if (deletedProject.image) await cloudinary.uploader.destroy(deletedProject.image);
    return { success: true, message: 'Project deleted successfully' }
}

// GET: /projects
// For: admin && user
exports.getProjects = async () => {
    const projects = await Project.find()
    return { success: true, data: projects }
}

// GET: /projects/:id
// For: admin && user
exports.getProject = async (id) => {
    const project = await Project.findById(id)
    if (!project) throw new ErrorResponse('Project not found', 404);

    return { success: true, data: project }
}