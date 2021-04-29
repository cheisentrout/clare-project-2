const express = require('express')
const portfolioRouter = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')

/*------------------- NEW --------------------*/

portfolioRouter.get('/', (req, res) => {
  // res.send('Hi I am the portfolio router!')
  res.render(
    'portfolio/new.ejs'
  )
})



/*------------------- POST --------------------*/






/*------------------- EDIT --------------------*/






/*------------------- PUT --------------------*/




module.exports = portfolioRouter
