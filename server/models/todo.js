/**
 * Created by BaTmAn on 7/1/17.
 */

const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },

    completed: {
        type : Boolean,
        default : false
    },

    completedAt : {
        type : Number,
        default : null
    }
});


module.exports = {Todo};
