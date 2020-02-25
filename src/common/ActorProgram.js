var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ActorProgram(id) {
  this.path = 'program';
  this.createPath = 'program';
  this.id = id;
}

ActorProgram.prototype = new SingleEntity();

ActorProgram.prototype.toArray = function() {
  return {
    programid: this.programid,
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

ActorProgram.prototype.validSchema = function() {
  return Joi.object().keys({
    programid: Joi.object().required().label('program'),
    fromdate: Joi.string().required().label('from date'),
    todate: Joi.string().required().label('to date'),
  });
};

module.exports = ActorProgram;
