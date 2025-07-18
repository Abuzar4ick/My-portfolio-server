const { dashboardService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// GET: /all-info/length
exports.allInformationLength = asyncHandler(async (req, res, next) => {
    const response = await dashboardService.getInformationLength()
    res.status(200).json(response)
})