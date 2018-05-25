const express = require ('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); //Have to define use model prior to executing passport code. 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT;
app.listen(PORT);