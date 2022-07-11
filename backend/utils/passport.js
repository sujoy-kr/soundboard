const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

// passport signup strategy that signs jwt token and returns it
passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, username, password, done) => {
            try {
                const user = await User.findOne({ username })
                if (user) {
                    return done(null, false, { message: 'User already exists' })
                }
                const newUser = await User.create({
                    name: req.body.name,
                    username,
                    password,
                })

                await newUser.save()
                const token = await newUser.getJwtToken()
                return done(null, { name: newUser.name, token })
            } catch (err) {
                return done(err)
            }
        }
    )
)

// passport login
passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, username, password, done) => {
            try {
                const user = await User.findOne({ username })
                if (!user) {
                    return done(null, false, { message: 'User not found' })
                }
                const isMatch = await user.comparePassword(password)
                if (!isMatch) {
                    return done(null, false, { message: 'Incorrect password' })
                }
                const token = await user.getJwtToken()
                return done(null, { name: user.name, token })
            } catch (err) {
                return done(err)
            }
        }
    )
)
