const jwt = require('jsonwebtoken')
const ErrorResponse = require('../utils/ErrorResponse')

const { JWT_SECRET } = process.env

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new ErrorResponse('No token provided', 401))
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if (!decoded.isAdmin) {
            return next(new ErrorResponse('Not authorized as admin', 403))
        }

        req.admin = decoded
        next()
    } catch (err) {
        next(new ErrorResponse('Invalid or expired token', 401))
    }
}