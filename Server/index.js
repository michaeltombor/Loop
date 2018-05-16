const express = require ('express');
const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//clientID: 75742664433-a6ssa1v5k91gcsujrsavv7ljhdp75kg1.apps.googleusercontent.com
//clientSecret: 5DhitzUeyEEex5jOiOl230xh

//passport.use(new GoogleStrategy());

const PORT = process.env.PORT;
app.listen(PORT);