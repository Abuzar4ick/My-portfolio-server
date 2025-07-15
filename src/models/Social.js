const { Schema, model } = require('mongoose')

const Social = new Schema({
    github_link: {
        type: String
    },
    telegram_link: {
        type: String
    },
    instagram_link: {
        type: String
    },
    youtube_link: {
        type: String
    },
    email_link: {
        type: String
    },
    linkedin_link: {
        type: String
    }
})

module.exports = model('Social', Social)