const { set, connect } = require('mongoose')

module.exports = databaseConnection = async () => {
    try {
        set('strictQuery', true)
        connect(process.env.MONGO_URI)
        console.info('Mongodb connected successfully')
    } catch (err) {
        console.error(`Database connection error ${err}`)
        process.exit(1)
    }
}