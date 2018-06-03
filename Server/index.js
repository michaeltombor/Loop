const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const express = require ('express');
const mongoose = require('mongoose');

require('./models/User'); //Have to define user model prior to executing passport code. 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//tells express to make use of cookies in our application
app.use(
  cookieSession({
    //configuration object passed
    //maxAge is how long cookie will last before it will expire
    //below calculation is for 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(8081, process.env.IP, function() {
  console.log("server has started");
});