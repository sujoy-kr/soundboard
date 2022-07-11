const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_EXPIRES, SALT_ROUND } = require('../utils/config')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    sounds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sound',
        },
    ],
})

// hash password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(Number(SALT_ROUND))
    this.password = await bcrypt.hash(this.password, salt)
})

// generate jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: JWT_EXPIRES,
    })
}

// compare password. Returns true if password is correct
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// get user from token
userSchema.statics.getUserFromToken = async function (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return await this.findById(decoded.id)
}

// doesn't send back password and version
userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        delete ret.__v
        return ret
    },
})

module.exports = mongoose.model('User', userSchema)
