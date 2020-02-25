var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Program(id) {
  this.path = 'program';
  this.createPath = 'program';
  this.id = id;
}

Program.prototype = new SingleEntity();

Program.prototype.toArray = function() {
  return {
    programname: this.programname,
    description: this.description,
  };
};

Program.prototype.validSchema = function() {
  return Joi.object().keys({
    programname: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = Program;
