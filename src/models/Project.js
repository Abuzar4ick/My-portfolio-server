const { model, Schema } = require('mongoose')

const Project = new Schema({
    title: {
        type: String,
        required: true
    },
    tags: { // web, backend ...
        type: [String],
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    key_words: { // file upload, rest API ...
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