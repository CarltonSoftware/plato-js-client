var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerBookingType(id) {
  this.path = 'ownerbookingtype';
  this.createPath = 'ownerbookingtype';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description')
    }
  };
}
OwnerBookingType.prototype = new SingleEntity();

OwnerBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

module.exports = OwnerBookingType;
