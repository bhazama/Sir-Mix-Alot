//jshint esversion: 6
const Model = require("./Model.js");

var UserSchema = {
  username : String,
  password : String
};

function User(){
  Model.call(this, UserSchema);
}

Model.extend(User);


module.exports = User;