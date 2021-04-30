/*=======================================================
  DEPENDENCIES
=======================================================*/

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const session = require('express-session')

/*=======================================================
  CONFIGURATION
=======================================================*/

require('dotenv').config()
const app = express ();
const db = mongoose.connection;
// Allow use of Heroku's port OR your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

/*=======================================================
  DATABASE
=======================================================*/

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

/*=======================================================
  MIDDLEWARE
=======================================================*/
//use public folder for static assets (CSS / JS / IMG folders for this project)
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended:true }));// extended: false - does not allow nested objects in query strings -- HAD TO CHANGE THIS TO TRUE FOR OBJECTS TO REGISTER FORM DATA
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

/*=======================================================
  ROUTES
=======================================================*/
//localhost:3000
app.get('/' , (req, res) => {
  // res.send('Hello World!');
  // res.redirect('/class')
  res.render(
    'pages/landing.ejs'
  )
});

/*=======================================================
  CONTROLLERS
=======================================================*/

const classController = require('./controllers/class_controller.js')
app.use('/class', classController)

const portfolioController = require('./controllers/portfolio_controller.js')
app.use(portfolioController)

const usersController = require('./controllers/users_controller.js')
app.use(usersController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use(sessionsController)

/*======================================================
ERROR CHECKER
=======================================================*/

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))

/*=======================================================
  LISTENER
=======================================================*/

app.listen(PORT, () => console.log( 'Class app istening on port:', PORT));
