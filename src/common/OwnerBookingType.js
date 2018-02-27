var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerBookingType(id) {
  this.path = 'ownerbookingtype';
  this.createPath = 'ownerbookingtype';
  this.id = id;
}
OwnerBookingType.prototype = new SingleEntity();

OwnerBookingType.prototype.validSchema = function() {
  return {
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
    inactive: Joi.boolean().optional().label('inactive')
  };
};

OwnerBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    inactive: this.inactive
  };
};

module.exports = OwnerBookingType;
