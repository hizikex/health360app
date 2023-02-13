const mongoose = require ('mongoose');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'LastName is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    mobileNo: {
        type: String,
        required: [true, 'mobileNumber is required']
    },
    dateOfBirth:{
        type: String,
        required:[true, 'dateOfBirth is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    profilePicture: {
        public_id: {
            type: String,
             },
            url:{ type: String
            }
    },
    token: {
        type: String,
    },
    verify: {
        type: Boolean,
        default:false
    },
    isAdmin: {
        type: Boolean,
        default:false

    },
},
{
    timestamps:true
})

const users = mongoose.model('users', userModel)
module.exports = users