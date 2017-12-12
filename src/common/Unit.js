var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Unit(id) {
  this.path = 'unit';
  this.createPath = 'unit';
  this.id = id;

  this.toArray = function() {
    return {
      name: this.name,
      description: this.description,
      decimalplaces: this.decimalplaces
    };
  };

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
      decimalplaces: Joi.number().required().label('decimalplaces'),
    };
  };
}
Unit.prototype = new SingleEntity();

module.exports = Unit;
