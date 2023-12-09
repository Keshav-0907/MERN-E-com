const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Name"],
        maxLength: [30, "Name Should be under 30 characters"],
        minLength: [5, "Name Should be atleadt 5 characters"]
    },
    email: {
        type: String,
        required: [true, "Enter Email"],
        unique: true,
        vaildate: [validator, "Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Enter Pass"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,

})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel