const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    price : {
        type: Number,
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model("Book", bookSchema);