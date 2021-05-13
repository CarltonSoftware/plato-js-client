var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function OwnerPaymentSelectionProgram(id) {
  this.path = 'program';
  this.createPath = 'program';
  this.id = id;
  this.program = new EntityLink({
    entity: 'Program'
  });
}

OwnerPaymentSelectionProgram.prototype = new SingleEntity();
OwnerPaymentSelectionProgram.prototype.toArray = function() {
  return {
    programid: this.program.id
  };
};

OwnerPaymentSelectionProgram.prototype.validSchema = function() {
  return Joi.object().keys({
    program: Joi.object().required().label('program')
  });
};

module.exports = OwnerPaymentSelectionProgram;
