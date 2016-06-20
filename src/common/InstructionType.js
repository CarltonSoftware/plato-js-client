var SingleEntity = require('./SingleEntity');

function InstructionType(id) {
  this.path = 'instructiontype';
  this.createPath = 'instructiontype';
  this.id = id;
}
InstructionType.prototype = new SingleEntity();

InstructionType.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a InstructionType
    InstructionType: this.InstructionType,
    description: this.description,
  };
};

InstructionType.prototype.validSchema = function() {
  return Joi.object().keys({
    instructiontype: Joi.string().label('Instruction Type'),
    description: Joi.string().required().label('Description'),
  });
};

module.exports = InstructionType;
