import Axios from 'axios'
import { API } from '../config/config'

const axios = Axios.create({
    baseURL: API,
    headers: {
        'Content-Type': 'application/json',
    },
})

// get all sounds from the server and send auth token
const getSounds = async (token) => {
    const response = await axios.get('/sound', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

// post a sound with token
const postSound = async (formData, token) => {
    try {
        await axios.post('/sound', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
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
