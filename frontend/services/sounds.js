const axios = require('axios')
const config = require('../config/config')
const url = config.API

// get all sounds from the server
export const getSounds = async () => {
    const response = await axios.get(url + '/sound')
    return response.data
}
