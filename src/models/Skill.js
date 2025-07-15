const { model, Schema } = require('mongoose')

const Skill = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    back_color: {
        type: String
    },
    projects: {
        type: Number,
        required: true,
        minimum: 1
    }
})

module.exports = model('Skill', Skill)