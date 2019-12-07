const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/educatorModel");
const express = require("express");
const router = express.Router();