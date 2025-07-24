const { model, Schema } = require('mongoose')

const Project = new Schema({
    title: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stack: {
        type: [String],
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    challenge: {
        type: String,
        required: true
    }
})

module.exports = model('Project', Project)