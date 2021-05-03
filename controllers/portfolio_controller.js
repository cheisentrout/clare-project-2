const express = require('express')
const portfolioRouter = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

/*------------ CHECK FOR LOGGED IN USER ------------*/

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/user/new')
  }
}

/*------------------- CREATE NEW PORTFOLIO --------------------*/

portfolioRouter.get('/portfolio/:studentId', (req, res) => {
  Student.findById(req.params.studentId, (err, foundStudent) => {
    res.render(
      'portfolio/new.ejs',
      {
        student: foundStudent,
        currentUser: req.session.currentUser
      }
    )
  })
})

/*------------------- POST PORTFOLIO --------------------*/

portfolioRouter.post('/portfolio', (req, res) => {
  // res.send(req.body)
  let studentId = req.params.studentId
  Portfolio.create(req.body, (err, createdPortfolio) => {
    res.redirect('/class')
  })
})




/*------------------- EDIT --------------------*/

portfolioRouter.get('/portfolio/:studentId/edit', isAuthenticated, (req, res) => {
  if (req.session.currentUser.teacher === true) {
    res.render(
      'portfolio/edit.ejs',
    )
  }
})




/*------------------- PUT --------------------*/




module.exports = portfolioRouter
