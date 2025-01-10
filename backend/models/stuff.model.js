const mongoose = require('mongoose')

const stuffSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const Stuff = mongoose.model('Stuff', stuffSchema)

module.exports = Stuff