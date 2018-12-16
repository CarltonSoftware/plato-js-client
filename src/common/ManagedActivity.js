var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ManagedActivity(id) {
  this.path = 'managedactivity';
  this.createPath = 'managedactivity';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
      donotmodify: Joi.boolean().label('donotmodify')
    }
  }
}

ManagedActivity.prototype = new SingleEntity();
ManagedActivity.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotmodify: this.donotmodify
  };
};
ManagedActivity.prototype.toString = function() {
  return this.name;
};

module.exports = ManagedActivity;
