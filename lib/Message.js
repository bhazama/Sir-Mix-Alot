//jshint esversion: 6

const Model = require("./Model");
const User = require("./User");

var MessageSchema = {
  from : User,
  to : User,
  message : String,
  sent : Date
};

function Message(){
  Model.call(this, MessageSchema);
}
Model.extend(Message);




module.exports = Message;