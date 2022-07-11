const multer = require('multer')

// multer middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'audios')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.mp3')
    },
})

module.exports = multer({ storage: storage }).single('file')
