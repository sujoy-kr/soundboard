require('dotenv').config()

const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET || 'secret'
const NODE_ENV = process.env.NODE_ENV || 'production'
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/test'
const JWT_EXPIRES = process.env.JWT_EXPIRES
const SALT_ROUND = process.env.SALT_ROUND

module.exports = {
    PORT,
    JWT_SECRET,
    NODE_ENV,
    MONGO_URI,
    JWT_EXPIRES,
    SALT_ROUND,
}
