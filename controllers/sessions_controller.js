const bcrypt = require('bcrypt')
const express = require('express')
const session = express.Router()
// const Student = require('../models/students.js')
// const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

session.get('/sessions/login', (req, res) => {
  res.render(
    'sessions/login.ejs',
    {
      currentUser: req.session.currentUser
    }
  )
})

session.post('/session', (req, res) => {
  // res.send('User login form was sent.')
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
        console.log(foundUser);
        req.session.currentUser = foundUser
        res.redirect('/class')
      } else {
        res.send('<a href="/">Oops! That password doesn\'t match.</a>')
      }
    }
  })
})

session.delete('/session', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})


module.exports = session
