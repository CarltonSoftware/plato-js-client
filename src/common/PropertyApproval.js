var SingleEntity = require('./SingleEntity');
var ActorProgram = require('./ActorProgram');
var Joi = require('joi');

function PropertyApproval(id) {
  this.path = 'approval';
  this.createPath = 'approval';
  this.id = id;
  this.actorprogram = new ActorProgram();
}

PropertyApproval.prototype = new SingleEntity();

PropertyApproval.prototype.toArray = function() {
  return {
    actorprogramid: this.actorprogram.id,
    approved: this.approved
  };
}

PropertyApproval.prototype.validSchema = function() {
  return Joi.object().keys({
    actorprogram: Joi.object().required().label('Actor Program'),
    approved: Joi.boolean().required().label('Approved')
  });
}

module.exports = PropertyApproval;
