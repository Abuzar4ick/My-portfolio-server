const { Social } = require('../models')

// POST: /social-networks
// For: admin
exports.createSocialNetworks = async (networks) => {
    const { github_link, telegram_link, instagram_link, youtube_link, email_link, linkedin_link } = networks

    const findNetworks = await Social.findOne()
    if (!findNetworks) {
        await Social.create({ github_link, telegram_link, instagram_link, youtube_link, email_link, linkedin_link })
    } else {
        await Social.findByIdAndUpdate(findNetworks._id, { github_link, telegram_link, instagram_link, youtube_link, email_link, linkedin_link })
    }

    return { success: true, message: 'New social networks links added successfully' }
}

// GET: /social-networks
// For: admin && user
exports.getSocialNetworks = async () => {
    const networks = await Social.findOne()
    return { success: true, data: networks }
}