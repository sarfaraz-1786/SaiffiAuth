const res = require("express/lib/response");

exports.register = () => {
    res.send("registered Route");
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
