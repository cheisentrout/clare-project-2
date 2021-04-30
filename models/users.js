const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  parent: { type: Boolean },
  teacher: { type: Boolean }
})

const User = mongoose.model('User', userSchema)

module.exports = User
