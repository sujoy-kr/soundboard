// extract token from the request header except the bearer word and set req.token as the token
const extractToken = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
        req.token = authorization.split(' ')[1]
    }
    next()
}
module.exports = extractToken
