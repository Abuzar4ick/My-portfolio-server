const cloudinary = require('cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// .env
const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Portfolio',
        allowed_formats: ['jpeg', 'png', 'jpg', 'svg', 'webp', 'pdf']
    }
})

module.exports = { cloudinary, storage }