var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AgencyBookingType(id) {
  this.path = 'agencybookingtype';
  this.createPath = 'agencybookingtype';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
      donotaddservices: Joi.boolean().required().label('do not add services?')
    };
  }
}
AgencyBookingType.prototype = new SingleEntity();

AgencyBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotaddservices: this.donotaddservices
  };
};

module.exports = AgencyBookingType;
