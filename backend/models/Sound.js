const mongoose = require('mongoose')

const soundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

// doesn't send back version and id
soundSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret._id
        delete ret.__v
    },
})

module.exports = mongoose.model('Sound', soundSchema)
