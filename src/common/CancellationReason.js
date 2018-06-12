var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationReason(id) {
  this.path = 'cancellationreason';
  this.createPath = 'cancellationreason';
  this.id = id;
}
CancellationReason.prototype = new SingleEntity();

CancellationReason.prototype.validSchema = function() {
  return {
    cancellationreason: Joi.string().required().label('Cancellation Reason')
  };
};

CancellationReason.prototype.toArray = function() {
  return {
    cancellationreason: this.cancellationreason
  };
};

module.exports = CancellationReason;
