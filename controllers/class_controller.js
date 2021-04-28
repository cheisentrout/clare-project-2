const express = require('express')
const router = express.Router()
const Student = require('../models/students.js')

/*------------------ SEED DATA -------------------*/

router.get('/seed', (req, res) => {
  Student.create(
    [
      {
        name: 'Aaron Briggs',
        img: 'https://images.unsplash.com/photo-1579609253335-ec3eeea092cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dob: '2017-08-22',
        address: '44 Denny Way, Madison, WI, 53702',
        parents: [
          'Madeline Jackson',
          'Dave Briggs'
        ],
        allergies: [
          'none'
        ],
        enrollment: 'Half day',
        notes: 'Aaron loves legos!'
      },
      {
        name: 'Brian Chen',
        img: 'https://images.unsplash.com/photo-1499214757999-dad4cbe50011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dob: '2017-06-04',
        address: '12 Main St, Unit 1, Madison, WI, 53702',
        parents: [
          'Eric Chen',
          'Lisa Chen'
        ],
        allergies: [
          'peanuts'
        ],
        enrollment: 'Full day',
        notes: 'Struggles with naptime if he doesn\'t have his blanket.'
      },
      {
        name: 'Jenny Markowicz',
        img: 'https://images.unsplash.com/photo-1607877342019-78edd203ecb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        dob: '2017-12-15',
        address: '8 Roseway Drive, Madison, WI, 53702',
        parents: [
          'Matthew Green',
          'Jude Markowicz'
        ],
        allergies: [
          'shellfish'
        ],
        enrollment: 'Full day',
        notes: 'Loves to "perform" for teachers and friends.'
      },
      {
        name: 'Kimmy Jacobs',
        img: 'https://images.unsplash.com/photo-1611890293555-2cb0075ecd3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        dob: '2017-09-10',
        address: '26 High Street, Madison, WI, 53702',
        parents: [
          'Tina Jacobs',
          'Quentin Jacobs'
        ],
        allergies: [
          'shellfish'
        ],
        enrollment: 'Full day',
        notes: 'Loves to "perform" for teachers and friends.'
      }
    ],
    (err, newStudents) => {
      console.log(newStudents);
      // res.send(newStudents)
      res.redirect('/class')
    }
  )
})


/*------------------ JSON DATA -------------------*/

router.get('/json', (req, res) => {
  Student.find({}, (err, allStudents) => {
    res.send(allStudents)
  })
})

/*---------------- INDEX / HOME ------------------*/

router.get('/', (req, res) => {
  // res.send('class index route set up')
  Student.find({}, (err, allStudents) => {
    // res.send(allStudents)
    res.render(
      'pages/index.ejs',
      {
        students: allStudents
      }
    )
  })
  // res.render('pages/index.ejs')
})

/*--------------------- NEW ---------------------*/

router.get('/enroll', (req, res) => {
  res.render(
    'pages/new.ejs'
  )
})

/*--------------------- POST --------------------*/

router.post('/', (req, res) => {
  Student.create(req.body, (err, newStudent) => {
    console.log(req.body);
    res.redirect('/')
  })
})

/*-------------------- SHOW ---------------------*/

router.get('/:id', (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    // res.send(foundStudent)
    res.render(
      'pages/show.ejs',
      {
        student: foundStudent
      }
    )
  })
})

/*-------------------- EDIT ---------------------*/


module.exports = router
