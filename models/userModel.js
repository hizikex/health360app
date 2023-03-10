const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

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
        required: [true, 'mobileNumber is required'],
        unique: true
    },
    dateOfBirth:{
        type: String,
        required:[true, 'dateOfBirth is required']
    },
    sentMessages: [{
        type: Schema.Types.ObjectId,
        ref: 'Messages'
      }],
      recievedMessages: [{
        type: Schema.Types.ObjectId,
        ref: 'Messages'
      }],
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    bookAppointment: [{
        type: Schema.Types.ObjectId,
        ref: 'appointment'
      }],
    // profilePicture: {
    //     public_id: {
    //         type: String,
    //          },
    //         url:{ type: String
    //         }
    // },
    token: {
        type: String,
    },
    verify: {
        type: Boolean,
        default:false
    },
    pendingRequest: {
        type: String,
        default:false

    },
    appointmentDate:  {
        type:String,
    },
    appointmentTime:  {
        type:String,
    },
    appointmentType: {
        type: String
    },
    bookDoctor:{
        type: String
    },
    appointmentStatus: {
        type: Boolean,
        default:false
    },
    symptoms: {
        type: String
    }
},
{
    timestamps:true
})

const users = mongoose.model('users', userModel)
module.exports = users