import Axios from 'axios'
import { API } from '../config/config'

const axios = Axios.create({
    baseURL: API,
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
        await axios.post('/sound', formData, {
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
