const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = mongoose.Schema( {
    email:{
        type: String,
        require: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate:{
            validator: (value) => {validator.isEmail(value)},
            message:'{VALUE} is not valid email'        
        }
    },
    password:{
        type: String,
        require: true,
        minlength: 6
    },
    tokens:[{
        access: {
            type: String,
            require: true
        },
        token:{
            type: String,
            require: true
        }
    }]
});

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(), access}, 'revali507').toString();

    user.tokens.push({access, token});
    user.save().then(() => {
        return token;
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};