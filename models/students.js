//require mongoose, since we'll be using mongoose's Schema method to create uniform data!
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  dob: { type: Date, required: true },
  //add "age", which would calculate time from dob Date to current time?
  address: String,
  parents: { type: [String], required: true },
  allergies: [String],
  enrollment: String,
  Notes: String
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
