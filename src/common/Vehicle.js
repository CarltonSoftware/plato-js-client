var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Vehicle(id) {
  this.path = 'vehicle';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {
    return {
      registration: Joi.string().min(4).label('registration').required(),
      make:  Joi.string().label('make').allow('').optional(),
      model: Joi.string().label('model').allow('').optional(),
      colour: Joi.string().allow('').label('colour'),
      comments: Joi.string().allow('').label('comments'),
    }
  };
}

Vehicle.prototype = new SingleEntity();
Vehicle.prototype.toArray = function() {
  return {
    make: this.make,
    model: this.model,
    registration: this.registration,
    colour: this.colour,
    comments: this.comments
  };
}

module.exports = Vehicle;