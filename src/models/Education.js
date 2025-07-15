const { model, Schema } = require('mongoose')

const Education = new Schema({
    time_length: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    place_name: {
        type: String,
        required: true
    }
})

module.exports = model('Education', Education)