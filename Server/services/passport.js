const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //we are pulling the model out of mongoose here

//takes user model and generate a unique id for passport to stuff into a cookie
passport.serializeUser((user, done) =>{
    //the below user.id is not the google profile ID
    //using the mongo id helps when users signs in with different ids. 
    //ie. facebook or google, or github
    
    //this line stuffs the user.id into the cookie
    done(null, user.id); 
});
//takes in a user id into a mongoose model instance
//we search over database and when we find the user, we call done
passport.deserializeUser((id, done) => {
   //We capitalize User because it is a model class
   //We pass in the id and it finds that user
   User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then( (existingUser) => {
                    if (existingUser) {
                        //already have a user record
                        done(null, existingUser);
                    } else {
                        //we don't have a user record. Create new record
                        //creates new instance of user. ".save" then saves it to MongoDB
                        new User({googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                    }
                })
            }
        )
    );
