const { model, Schema } = require('mongoose')

const ProfileInfo = new Schema({
    full_name: {
        type: String,
        required: [true, 'Full n`ame is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    experience: {
        type: Number,
        required: [true, 'Years of experience is required']
    },
    satisfied_clients: {
        type: Number,
        required: [true, 'Length of satisfied clients is required']
    },
    completed_projects: {
        type: Number,
        required: [true, 'Length of completed projects is required']
    },
    bio: {
        type: String,
        required: [true, 'Bio is required']
    }
})

module.exports = model('ProfileInfo', ProfileInfo)