const bcrypt = require('bcrypt')
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
  res.render(
    'users/login.ejs'
  )
})

user.post('/user', (req, res) => {
  // res.send(req.body) WORKS!
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, newUser) => {
    console.log('A new user was created: ' + newUser);
    res.redirect('/class')
  })
})

user.post('/user', (req, res) => {
  // res.send('User login form was sent.') WORKS!
  // res.send(req.body)
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send('There was an issue with our database. Check the console for the error message.')
    } else if (!foundUser) {
      //Eventually, could render some sort of modal with this alert.
      res.send('<a href="/">Sorry, that user was not found. Click here to return to the home page.</a>')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/class')
      } else {
        res.send('<a href="/">Oops! That password doesn\'t match.</a>')
      }
    }
  })
})

module.exports = user
