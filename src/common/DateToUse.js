var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function DateToUse(id) {
  this.path = 'datetouse';
  this.createPath = 'datetouse';
  this.id = id;

  this.toArray = function() {
    return {
      name: this.name,
      description: this.description
    };
  };

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description')
    };
  };
}
DateToUse.prototype = new SingleEntity();

module.exports = DateToUse;
