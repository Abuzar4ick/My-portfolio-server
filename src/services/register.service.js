const ErrorResponse = require('../utils/ErrorResponse')
// .env
const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env

// POST: /admin-register
exports.register = async (req, admin) => {
    const { username, password } = admin

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true
        return { success: true, message: 'You was registered successfully' }
    }

    throw new ErrorResponse('Incorrect username or password, please try again', 401)
}

// POST: /admin-logout
exports.logout = async (session) => {
    return new Promise((resolve, reject) => {
        session.destroy(err => {
            if (err) return reject(new ErrorResponse('Logout was not successful', 500))
            resolve({ success: true, message: 'Logout was successful' })
        })
    })
}