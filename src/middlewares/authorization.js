const ErrorResponse = require('../utils/ErrorResponse')

module.exports = (req, res, next) => {
    if (req.session.isAdmin) return next()
    return next(new ErrorResponse('Session expired or no permission', 403))
}