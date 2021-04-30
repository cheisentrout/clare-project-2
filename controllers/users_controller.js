const express = require('express')
const user = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

user.get('/user/new', (req, res) => {
  res.render(
    'users/new.ejs'
  )
})

user.get('/user/login', (req, res) => {
  res.send("Here is the log in page.")
})

module.exports = user
