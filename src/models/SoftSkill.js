const { Schema, model } = require('mongoose')

const SoftSkill = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = model('SoftSkill', SoftSkill)