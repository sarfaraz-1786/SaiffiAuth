const express = require("express");

const router = express.Router();

const { register, forgetpassword, resetpassword, login } = require("../controllers/AuthController");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgetpassword").post(forgetpassword);

router.route("/resetpassword").put(resetpassword);

module.exports = router;
