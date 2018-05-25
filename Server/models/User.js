//MONGOOSE MODEL CLASS

const mongoose = require('mongoose');
const {Schema } = mongoose; //  Schema = mongoose.Schema;

//Schema desscribes what the user will look like
const userSchema = new Schema ({
  googleId : String //would use "number" if it was a number
  
});

mongoose.model('users', userSchema);

//first argument is name of collection
//second argument is the schema