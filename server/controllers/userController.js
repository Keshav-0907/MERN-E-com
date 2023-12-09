const userModel = require('../models/userModel')

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body

    const user = await userModel.create({
        name, email, password,
        avtar: {
            public_id: "Sample",
            url: "sample"
        }
    })

    res.status(200).json({
        success: true,
        user
    })
}