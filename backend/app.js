const express = require('express'),
    helmet = require('helmet'),
    cors = require('cors'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser')

const config = require('./utils/config')

const app = express()

// allow cors for all origins
app.use(cors())

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(fileUpload())

// connect to mongodb
mongoose
    .connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch((err) => {
        console.log(err)
    })

// all routes
app.use(require('./routes'))

// passport config
require('./utils/passport')

// serve static files
app.use('/api/audios', express.static(path.join(__dirname, '/audios')))

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
