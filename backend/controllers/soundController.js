const Sound = require('../models/Sound')
const User = require('../models/User')

// get all sounds for the user that will be extracted form token
const getAllSounds = async (req, res) => {
    const token = req.token
    const user = await User.getUserFromToken(token)
    const sounds = await Sound.find({ user: user._id })
    res.status(200).json(sounds)
}

// POST request
const addSound = async (req, res) => {
    const token = req.token
    const user = await User.getUserFromToken(token)

    const name = req.body.name
    const file = req.file.path
    const sound = new Sound({
        name,
        file,
        user: user._id,
    })

    await sound.save()
    // save sound to user
    user.sounds.push(sound)
    await user.save()
    res.status(201).json(sound)
}

module.exports = {
    getAllSounds,
    addSound,
}
