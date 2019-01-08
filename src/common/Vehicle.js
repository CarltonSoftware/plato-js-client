var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function Vehicle(id) {
  this.path = 'vehicle';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {

      return {
        make:  Joi.string().label('make'),
        model: Joi.string().label('model'),
        registration: Joi.string().min(4).label('registration'),
        colour: Joi.string().allow("").label('colour'),
        comments: Joi.string().allow("").label('comments'),
    } 
  }
}

Vehicle.prototype = new SingleEntity();


Vehicle.prototype.toArray = function() {
  return {
    make: this.make,
    model: this.model,
    registration: this.registration,
    colour: this.colour,
    comments: this.comments
  }
}

module.exports = Vehicle;