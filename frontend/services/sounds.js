const Axios = require('axios')
const config = require('../config/config')
const url = config.API

const axios = Axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
})

// get all sounds from the server
const getSounds = async () => {
    const response = await axios.get('/sound')
    return response.data
}

// post a sound
const postSound = async (formData) => {
    try {
        await axios.post(`http://localhost:3001/api/sound`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        window.location.href = '/'
    } catch (err) {
        alert(err.message)
    }
}

module.exports = {
    getSounds,
    postSound,
}
