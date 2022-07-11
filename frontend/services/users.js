import Axios from 'axios'
import { API } from '../config/config'

const axios = Axios.create({
    baseURL: API,
    headers: {
        'Content-Type': 'application/json',
    },
})

// user signup
const signup = async (newUser) => {
    const response = await axios.post('/user', newUser)
    return response.data
}

const login = async (user) => {
    const response = await axios.post('/user/login', user)
    return response.data
}

module.exports = {
    signup,
    login,
}
