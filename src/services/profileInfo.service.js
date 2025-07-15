const { ProfileInfo } = require('../models')
const ErrorResponse = require('../utils/ErrorResponse')
const { cloudinary } = require('../storage/cloudinary')

// POST: /profile/info
// For: admin
exports.createInfo = async (profile, image) => {
    const { full_name, role, experience, satisfied_clients, completed_projects, bio } = profile

    const profileInfo = await ProfileInfo.findOne()
    if (profileInfo) throw new ErrorResponse('Profile information already created', 400);

    await ProfileInfo.create({ full_name, role, experience, satisfied_clients, completed_projects, bio, image })
    return { success: true, message: 'New profile info created successfully' }
}

// PUT: /profile/info
// For: admin
exports.updateProfile = async (profile, image) => {
    const { full_name, role, experience, satisfied_clients, completed_projects, bio } = profile
    const profileInfo = await ProfileInfo.findOne()

    if (profileInfo) {
        if (profileInfo.image) await cloudinary.uploader.destroy(user.image);
        profileInfo.image = newAvatar
    }

    await ProfileInfo.findByIdAndUpdate(profileInfo._id, { full_name, role, experience, satisfied_clients, completed_projects, bio, image }, { new: true })
    return { success: true, message: 'Profile info updated successfully' }
}

// GET: /profile/info
// For: admin && user
exports.getProfileInfo = async () => {
    const profile = await ProfileInfo.findOne()
    return { success: true, data: profile }
}