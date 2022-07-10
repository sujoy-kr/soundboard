require('dotenv').config()

const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET
const NODE_ENV = process.env.NODE_ENV
const MONGO_URI = process.env.MONGO_URI

module.exports = {
    PORT,
    JWT_SECRET,
    NODE_ENV,
    MONGO_URI,
}
