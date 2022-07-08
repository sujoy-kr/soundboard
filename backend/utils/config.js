require('dotenv').config()

const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET
const NODE_ENV = process.env.NODE_ENV

module.exports = {
    PORT,
    JWT_SECRET,
    NODE_ENV
}