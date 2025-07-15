const { projectService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /projects
exports.newProject = asyncHandler(async (req, res, next) => {
    const response = await projectService.createProject(req.body)
    res.status(201).json(response)
})

// DELETE: /projects
exports.deleteProject = asyncHandler(async (req, res, next) => {
    const response = await projectService.deleteProject(req.params.id)
    res.status(200).json(response)
})

// GET: /projects
exports.allProjects = asyncHandler(async (req, res, next) => {
    const response = await projectService.getProjects()
    res.status(200).json(response)
})

// GET: /projects/:id
exports.oneProject = asyncHandler(async (req, res, next) => {
    const response = await projectService.getProject(req.params.id)
    res.status(200).json(response)
})