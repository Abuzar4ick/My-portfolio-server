const ErrorResponse = require('../utils/ErrorResponse')
const jwt = require('jsonwebtoken')
// .env
const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET, JWT_EXPIRES_IN } = process.env

// POST: /admin-register
exports.register = async (admin) => {
    const { username, password } = admin

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ isAdmin: true }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
        return { success: true, message: 'Registered successful', token }
    }

    throw new ErrorResponse('Incorrect username or password, please try again', 401)
}

// POST: /admin-logout
exports.logout = async () => {
    return { success: true, message: 'Logout successful (remove token on frontend)' }
}