const User = require('../models/User')

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;
    try {
        const user = await User.create({
            username,
            email,
            password,
        });
        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = () => {
    res.send("login Route");
};

exports.forgetpassword = () => {
    res.send("forgetpassword Route");
};

exports.resetpassword = () => {
    res.send("resetpassword Route");
};
