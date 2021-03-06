/*----------------- DEPENDENCIES ------------------*/

const express = require('express')
const router = express.Router()
const Student = require('../models/students.js')
const Portfolio = require('../models/portfolio.js')
const User = require('../models/users.js')

/*------------ CHECK FOR LOGGED IN USER ------------*/

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    // if (req.session.currentUser.teacher === false) {
    //   console.log('Current user is a caregiver.');
    //   console.log(req.session.currentUser.childsName);
    // } else if (req.session.currentUser.teacher === true){
    //   console.log('Current user is a TEACHER.');
    // }
    return next()
  } else {
    res.redirect('/user/new')
  }
}

/*------------ CHECK TEACHER / CAREGIVER STATUS ------------*/

//way to separate this from isAuthenticated?
// const teacherOrCaregiver = () => {
//   if (req.session.currentUser) {
//     if (req.session.currentUser.teacher === false) {
//       console.log('This user is a CAREGIVER.');
//     } else if (req.session.currentUser.teacher === true) {
//       console.log('This user is a TEACHER.');
//     }
//   }
// }

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

/*---------------- INDEX / CLASS HOME ------------------*/

router.get('/', isAuthenticated, (req, res) => {
    if (req.session.currentUser.teacher === false) {
      console.log('This user is a CAREGIVER.');
    } else if (req.session.currentUser.teacher === true) {
      console.log('This user is a TEACHER.');
    }
  Student.find({}, (err, allStudents) => {
    res.render(
      'pages/index.ejs',
      {
        students: allStudents,
        currentUser: req.session.currentUser
      }
    )
  })
})

/*--------------------- ENROLL NEW STUDENT ---------------------*/

router.get('/enroll', isAuthenticated, (req, res) => {
  if (req.session.currentUser.teacher === true) {
    res.render(
      'pages/new.ejs',
      {
        currentUser: req.session.currentUser
      }
    )
  } else {
    res.redirect('/class')
  }
})

/*--------------------- POST NEW STUDENT --------------------*/

router.post('/', (req, res) => {
  Student.create(req.body, (err, newStudent) => {
    console.log(req.body);
    res.redirect('/')
  })
})

/*-------------------- SHOW SPECIFIC STUDENT ---------------------*/

//have to pass through isAuthenticated here in order for the req.session.currentUser info to be available?
router.get('/:id', isAuthenticated, (req, res) => {
  if (req.session.currentUser.teacher === true) {
    Student.findById(req.params.id, (err, foundStudent) => {
      Portfolio.findOne({ studentId: req.params.id } , (err2, foundPortfolio) => {
        if (foundPortfolio) {
          res.render(
            'pages/show.ejs',
            {
              student: foundStudent,
              portfolio: foundPortfolio,
              currentUser: req.session.currentUser
            }
          )
        } else {
          console.log('This student has an empty portfolio.');
          res.render(
            'pages/show.ejs',
            {
              student: foundStudent,
              portfolio: null,
              currentUser: req.session.currentUser
            }
          )
        }
      })
    })
    //If the current user is a caregiver...
  }
  else if (req.session.currentUser.teacher === false) {
    //Find the student who's name matches the user's child's name
    Student.findById(req.params.id, (err, foundStudent) => {
      Portfolio.findOne({studentName: foundStudent.name}, (err2, foundPortfolio) => {
        if (foundStudent.name === req.session.currentUser.childsName) {
          if (foundPortfolio) {
            res.render(
              'pages/show.ejs',
              {
                student: foundStudent,
                portfolio: foundPortfolio,
                currentUser: req.session.currentUser
              }
            )
          }
          else {
            res.render(
              'pages/show.ejs',
              {
                student: foundStudent,
                portfolio: null,
                currentUser: req.session.currentUser
              }
            )
          }
        } else {
          res.send('You cannot view a portfolio that does not belong to your child.')
        }
      })
    })
  }
})

/*-------------------- EDIT STUDENT DETAILS ---------------------*/

router.get('/:id/edit', isAuthenticated, (req, res) => {
  if (req.session.currentUser.teacher === true) {
    Student.findById(req.params.id, (err, foundStudent) => {
      console.log(foundStudent);
      res.render(
        'pages/edit.ejs',
        {
          student: foundStudent,
          currentUser: req.session.currentUser
        }
      )
    })
  }
})

/*------------- PUT (SEND DETAIL UPDATES) --------------*/

router.put('/:id', (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
    if (req.body.name) {
      console.log(req.body); // logs "null"
    } else {
      console.log(err);
    }
    //how to just send the updates directly to the student's show page?
    res.redirect('/class')
  })
})

/*------------------- DELETE / UNENROLL --------------------*/

router.delete('/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, foundStudent) => {
    res.redirect('/class')
  })
})


module.exports = router
