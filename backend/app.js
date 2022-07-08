const express = require('express'),
    helmet = require('helmet'),
    cors = require('cors'),
    morgan = require('morgan')

const config = require('./utils/config')

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// all routes
app.use(require('./routes'))

const isProduction = config.NODE_ENV === 'production'

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('not found')
    err.status = 404
    next(err)
})

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use((err, req, res) => {
        console.log(err)
        res.status(err.status || 500).json({
            message: err.message,
            error: err,
        })
    })
}

// production error handler
// no stacktrace leaked to user
app.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: {},
    })
})

module.exports = app
