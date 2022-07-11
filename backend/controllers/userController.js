const User = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// create user
const createUser = async (req, res) => {
    res.json(req.user)
}

// login user
const loginUser = async (req, res) => {
    res.json(req.user)
}

module.exports = {
    getAllUsers,
    createUser,
    loginUser,
}
