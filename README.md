# Developmental Portfolio Tracker

## Overview

Link to live site: https://clare-project-2.herokuapp.com/class

As a former early childhood education teacher, I wanted to create an app for teachers (and caregivers) that would ease the "parent/teacher conference" experience! One of my duties as a teacher was to create developmental portfolios for each student in my class, spanning the five main areas of early childhood development. The portfolio needed to have an image, quote, and description representing where the student was in each area of development.

As my project is now, it allows teachers to enroll and disenroll students from their class. It allows teachers to create and edit the content of each student's portfolio. It features a portfolio view page that could be utilized when discussing the portfolios with parents during conferences. It also has the ability to log in a user by type - caregiver, or teacher. The viewing permission in the app are determined by which type the user is!

## Technology used

- Node.js
- Express.js
- MongoDB, Mongoose
- Skeleton CSS Framework (plus custom CSS)
- Vanilla JavaScript
- EJS
- Heroku

## User Stories and Wireframes

![Conference Confidant](img/totbot.pdf)

## Known Remaining Bugs

- My portfolio edit route is not sending updates currently.
- My toggleHidden() static JS function is buggy - at times, buttons have to be clicked twice in order to hide a section. Other times, selecting a different section does not close the section that is currently open.
- My responsive CSS is patchy at best!

### Day 1

- Wrote MVC file structure.
- Set up create, read, update and delete routes for students collection.

### Day 2

- I spent most of today setting up my Portfolio schema, and connecting one portfolio to one student, and getting my routes to cooperate with one another now that I have multiple new/edit routes.
- The biggest issue I'm running into is how to redirect to a page from my /class router after I've created a portfolio in the portfolio router.
  - I ended up needing to delete the first parameter ('/portfolio') from my app.use method with the portfolioController! I was able to redirect much more easily from the project's home directory once that was removed.
- Some other challenges have been: how to tell the server to ignore parts of my EJS file if the data doesn't exist...

### Day 3

- Today I am going to attempt to set up authentication and users! I want to make it so that a user can be either a parent or a teacher, and the site permissions change based on which they are. Obviously, no information about the kids should be visible unless a user has an account and is signed in.
- Biggest roadblock today so far has been adding a SECRET to my .env file, then not realizing I needed to add it as a config var in Heroku. That is working now.
- I'm fiddling with my static JS functions to hide/display elements based on selected buttons. I'm having trouble figuring out how to hide one area when the other button is clicked, without having to toggle the selected button itself. Maybe try a "selected" class...?

### Day 4

- Today I'm continuing to implement varying view permissions for teachers and caregivers.

### Day 5

- This morning I started playing around with iterating over data returned from MongoDB. I want to be able to represent which parts of a student's portfolio are complete, and which still need to be filled out, so I needed to be able to access my Schema's keys and values. Initially, using Object.keys() and Object.values() on the returned data gave me unrecognizable variables, which must be built-in Mongo information? This problem was solved by a [Stack Overflow article](https://stackoverflow.com/questions/44833736/object-keys-returns-unexpected-keys-on-mongodb-object-from-collection/44833913) that helped me format the data returned by the above methods using .toJSON().
- Ultimately, I didn't have the brain power or time to finish this feature! The nested objects proved to be a bit more time consuming to work with than I expected.

## Future Improvements

- Creating an account should send a user directly to the home page, rather than making them login.
- Finishing the implementation of to do/ done lists for teachers to see which area of the portfolio still needs attention.
- Allowing teachers to upload image files from their machines, rather than just web links.
- Parental alerts for why they can't access certain pages - right now, if the permission is forbidden, they're just sent a simple res.send() message. (Using a res.redirect() and an alert did not work here.)
- Making sure the site is fully responsive and looks good cross-devices.

##Summary

This was a really fun project to work on, as it took me back to my teaching days! I found it educational to set up multiple routers and data Schemas, and learn how to work with nested database calls. One of my goals for this project was to write DRYer static JS, which I think I did... alright at!
