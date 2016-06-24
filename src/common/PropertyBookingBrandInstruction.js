var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var InstructionType = require('./InstructionType');
var Joi = require('joi');

function PropertyBookingBrandInstruction(propertyId, bookingBrandId, id) {
  this.path = '/property/' + propertyId + '/bookingbrand/' + bookingBrandId + '/instruction';
  this.createPath = this.path;
  this.id = id;
  this.instructiontype = new InstructionType();
}
PropertyBookingBrandInstruction.prototype = new SingleEntity();

PropertyBookingBrandInstruction.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyBookingBrandInstruction
    fromdate: this.fromdate,
    todate: this.todate,
    instructiontext: this.instructiontext,
    html: this.html,
    instructiontypeid: this.instructiontypeid,
  };
};

PropertyBookingBrandInstruction.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.date().required().label('From Date'),
    todate: Joi.date().required().label('To Date'),
    instructiontext: Joi.string().required().label('Instruction Text'),
    html: Joi.boolean().required().label('Html Flag'),
    instructiontypeid: Joi.number().required().label('Instruction Type'),
  });
};

module.exports = PropertyBookingBrandInstruction;
