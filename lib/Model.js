// jshint esversion: 6

const DataStore = require("./DataStore.js");
const extend = require("./extend.js");
let temp = DataStore.store;

function Model(schema){
  this.schema = schema;
  this.id = null;

  for(let key in schema){
    this[key] = null;
}
  if(temp[this.constructor.name] === undefined){
    temp[this.constructor.name] = [];
}

Model.getNextId = function(){
  return temp[this.name].length + 1;
};

Model.find = function(id){
  for(var i = 0; i < temp[this.name].length; i++){
    if(temp[this.name][i].id === id){
      return temp[this.name][i];
    }
  }
  return null;
};

Model.prototype.save = function(){
  if(!this.id){
    this.id = this.constructor.getNextId();
    temp[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function(){
  if(this.id !== null){
    this.id = null;
  }
};

Model.extend = function(klass){
  extend(klass.prototype, Model.prototype);
  extend(klass, Model);
};


// Model.prototype.save = function(){
//   this.store.id = null;
// };

}





//Model.prototype = Object.create(DataStore.prototype);

module.exports = Model;