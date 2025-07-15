const { model, Schema } = require('mongoose')

const Experience = new Schema({
    role: {
        type: String,
        required: true
    },
    time_length: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = model('Experience', Experience)