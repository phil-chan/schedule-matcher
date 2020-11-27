const express = require("express");
const router = express.Router();

const { applyAuthRoutes } = require('authenticare/server')
const { userExists, getUserByUsername, createUser } = require('../db/users')


applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})


module.exports = router;
