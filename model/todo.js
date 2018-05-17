const mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    },
    user_id: String
},{
    timestamps: true
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = {Todo};