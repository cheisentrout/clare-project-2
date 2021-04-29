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

portfolioRouter.post('/', (req, res) => {
  // res.send(req.body)
  Portfolio.create(req.body, (err, createdPortfolio) => {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      console.log(createdPortfolio);
      res.send(createdPortfolio)
    }
  })
})




/*------------------- EDIT --------------------*/






/*------------------- PUT --------------------*/




module.exports = portfolioRouter
