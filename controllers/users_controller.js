const express = require('express')
const user = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

user.get('/user', (req, res) => {
  res.send('I am the user route, hear me roar.')
})

module.exports = user
