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

// dont send back version

// turn _id into id
soundSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        delete ret.createdAt
        delete ret.updatedAt
    },
})

module.exports = mongoose.model('Sound', soundSchema)
