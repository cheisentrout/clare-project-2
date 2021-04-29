/*=======================================================
  DEPENDENCIES
=======================================================*/

const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');

/*=======================================================
  CONFIGURATION
=======================================================*/

const app = express ();
const db = mongoose.connection;
require('dotenv').config()
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

// Error / success checker:
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

/*=======================================================
  MIDDLEWARE
=======================================================*/
//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended:true }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

/*=======================================================
  ROUTES
=======================================================*/
//localhost:3000
app.get('/' , (req, res) => {
  // res.send('Hello World!');
  res.redirect('/class')
});

/*=======================================================
  CONTROLLERS
=======================================================*/

const classController = require('./controllers/class_controller.js')
app.use('/class', classController)
const portfolioController = require('./controllers/portfolio_controller.js')
app.use(portfolioController)

/*=======================================================
  LISTENER
=======================================================*/

app.listen(PORT, () => console.log( 'Class app istening on port:', PORT));
