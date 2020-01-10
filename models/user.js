const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
        },
    password: {
        type: String,
        required:true
        },
    date:{
        type:String
    },
    gender:{
        type:String
    },

    profileimage:{
        type:String
    },
   
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
    });



userSchema.plugin(uniqueValidator);
const User = mongoose.model('User',userSchema);
module.exports = User;

