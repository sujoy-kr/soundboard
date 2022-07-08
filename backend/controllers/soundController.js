const Sound = require('../models/Sound')

const getAllSounds = async (req, res) => {
    const sounds = await Sound.find({})
    res.json(sounds)
}

const addSound = async (req, res) => {
    const name = req.body.name
    const file = req.body.file
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
