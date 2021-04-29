const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = Schema({
  studentId: String,
  studentName: String,
  cognitive: {
    img: String,
    quote: String,
    description: String
  },
  socioEmotional: {
    img: String,
    quote: String,
    description: String
  },
  speechLang: {
    img: String,
    quote: String,
    description: String
  },
  fineMotor: {
    img: String,
    quote: String,
    description: String
  },
  grossMotor: {
    img: String,
    quote: String,
    description: String
  },
  summary: String
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio
