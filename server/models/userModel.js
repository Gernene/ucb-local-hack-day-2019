const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

//simple schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  courses: {
      type: Array,
      required: true,
      minlength: 4,
      maxlength: 48
  },
  internships: {
      type: Array,
      required: true,
      minlength: 1,
      maxlength: 255
  },
  //give different access rights if admin or not 
  isAdmin: Boolean
});


//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}

const User = mongoose.model('User', UserSchema);

//function to validate user 
function validateUser(user) {
  console.log(user)
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  };
  console.log(Joi.validate(user, schema));

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;