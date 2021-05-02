const express = require('express')
const portfolioRouter = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')


/*------------------- CREATE NEW PORTFOLIO --------------------*/

portfolioRouter.get('/portfolio/:studentId', (req, res) => {
  Student.findById(req.params.studentId, (err, foundStudent) => {
    res.render(
      'portfolio/new.ejs',
      {
        student: foundStudent
      }
    )
  })
})

/*------------------- POST PORTFOLIO --------------------*/

portfolioRouter.post('/portfolio', (req, res) => {
  // res.send(req.body)
  let studentId = req.params.studentId
  Portfolio.create(req.body, (err, createdPortfolio) => {
    res.redirect('/')
  })
})




/*------------------- EDIT --------------------*/

portfolioRouter.get('/portfolio/:studentId/edit', (req, res) => {
  res.render(
    'portfolio/edit.ejs'
  )
})




/*------------------- PUT --------------------*/




module.exports = portfolioRouter
