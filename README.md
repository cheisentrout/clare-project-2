# Developmental Portfolio Tracker

## Overview

Link to live site: https://clare-project-2.herokuapp.com/class

## Technology used

## User Stories and Wireframes

### Day 1

- wrote MVC file structure
- set up create, read, update and delete routes for my students collection

### Day 2

- I spent most of today setting up my Portfolio schema, and connecting one portfolio to one student, and getting my routes to cooperate with one another now that I have multiple new/edit routes.
- The biggest issue I'm running into is how to redirect to a page from my /class router after I've created a portfolio in the portfolio router.
  - I ended up needing to delete the first parameter ('/portfolio') from my app.use method with the portfolioController! I was able to redirect much more easily from the project's home directory once that was removed.
- Some other challenges have been: how to tell the server to ignore parts of my ejs file if the data doesn't exist...

### Day 3

- Today I am going to attempt to set up authentication and users! I want to make it so that a user can be either a parent or a teacher, and the site permissions change based on which they are. Obviously, no information about the kids should be visible unless a user has an account and is signed in.

### Day 4


### Day 5


##Summary
