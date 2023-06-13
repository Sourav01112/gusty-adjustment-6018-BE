const express = require("express");
const { UserModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();


module.exports = { userRouter };
