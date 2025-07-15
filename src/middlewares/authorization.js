const ErrorResponse = require('../utils/ErrorResponse')

module.exports = (req, res, next) => {
    if (req.session.isAdmin) return next()
    return next(new ErrorResponse('No permission', 403))
}