//jshint esversion: 6

const Model = require("./Model");
const User = require("./User");

var AccountSchema = {
  user : User,
  accountNumber : Number,
  address : String,
  balance : Number
};

function Account(){
  Model.call(this, AccountSchema);
}

Model.extend(Account);

module.exports = Account;
