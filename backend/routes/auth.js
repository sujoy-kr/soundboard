const { expressjwt: jwt } = require('express-jwt')

const config = require('../utils/config')

const JWT_SECRET = config.JWT_SECRET
const getTokenFromHeader = (req) =>{
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }

    return null
}

const auth = {
    required: jwt({
        secret: JWT_SECRET,
        getToken: getTokenFromHeader,
        algorithms: ['HS256']
    }),
    optional: jwt({
        secret: JWT_SECRET,
        getToken: getTokenFromHeader,
        algorithms: ['HS256'],
        credentialsRequired: false
    })
}

module.exports = auth