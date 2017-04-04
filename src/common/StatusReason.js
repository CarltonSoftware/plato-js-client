var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function StatusReason(id) {
  this.path = this.createPath = 'reason';
  this.id = id;
}
StatusReason.prototype = new SingleEntity();

StatusReason.prototype.toArray = function() {
  return {
    reason: this.reason
  };
};

StatusReason.prototype.validSchema = function() {
  return Joi.object().keys({
    reason: Joi.string().label('Reason'),
  });
};

module.exports = StatusReason;