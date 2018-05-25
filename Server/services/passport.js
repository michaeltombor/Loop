const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //we are pulling the model out of mongoose here

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
