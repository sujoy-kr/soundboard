const Sound = require('../models/Sound')

// GET request
const getAllSounds = async (req, res) => {
    const sounds = await Sound.find({})
    res.json(sounds)
}

// POST request
const addSound = async (req, res) => {
    const name = req.body.name
    const file = req.file.path
    const sound = new Sound({
        name,
        file,
    })
    await sound.save()
    res.status(201).json(sound)
}

module.exports = {
    getAllSounds,
    addSound,
}
