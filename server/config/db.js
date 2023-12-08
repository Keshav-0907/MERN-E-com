const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect('mongodb://localhost:27017/Ecomm').then(() => {
        console.log("DB Connected")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDB