var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Instructiontype = require('./Instructiontype');

function PropertyBookingBrandInstruction(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.InstructionType = new Instructiontype();
}
PropertyBookingBrandInstruction.prototype = new SingleEntity();

PropertyBookingBrandInstruction.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyBookingBrandInstruction
    fromdate: this.fromdate,
    todate: this.todate,
    instructiontext: this.instructiontext,
    html: this.html,
    InstructionType: this.InstructionType,
  };
};

PropertyBookingBrandInstruction.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.date().required().label('From Date'),
    todate: Joi.date().required().label('To Date'),
    instructiontext: Joi.string().required().label('Instruction Text'),
    html: Joi.boolean().required().label('Html Flag'),
    instructiontype: Joi.object().required().label('Instruction Type'),
  });
};

module.exports = PropertyBookingBrandInstruction;
