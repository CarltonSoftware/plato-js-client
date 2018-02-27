var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function GuestAgeRange(id) {
  this.path = 'guestagerange';
  this.createPath = this.path;
  this.id = id;
}
GuestAgeRange.prototype = new SingleEntity();

GuestAgeRange.prototype.validSchema = function() {
  return {
    agefrom: Joi.number().required().label('age from'),
    ageto: Joi.number().required().label('age to')
  };
};

GuestAgeRange.prototype.toArray = function() {
  return {
    agefrom: this.agefrom,
    ageto: this.ageto
  };
};

module.exports = GuestAgeRange;
