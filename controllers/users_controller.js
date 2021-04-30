const bcrypt = require('bcrypt')
const express = require('express')
const user = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

user.get('/user/new', (req, res) => {
  res.render(
    'users/new.ejs',
    {
      currentUser: req.session.currentUser
    }
  )
})

user.post('/user', (req, res) => {
  console.log('This is the req.body: ' + req.body);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, newUser) => {
    console.log('A new user was created: ' + newUser);
    if (newUser === undefined) {
      res.redirect('/user/new')
    } else {
      console.log(newUser);
      res.redirect('/sessions/login')
    }
  })
})

module.exports = user
