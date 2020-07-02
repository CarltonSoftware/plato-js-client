var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ComplaintReason(id) {
  this.path = 'complaintreason';
  this.createPath = 'complaintreason';
  this.id = id;
}
ComplaintReason.prototype = new SingleEntity();

ComplaintReason.prototype.validSchema = function() {
  return {
    complaintreason: Joi.string().required().label('Complaint Reason'),
    description: Joi.string().required().label('Description')
  };
};

ComplaintReason.prototype.toArray = function() {
  return {
    complaintreason: this.complaintreason,
    description: this.description
  };
};

ComplaintReason.prototype.toString = function() {
  return this.complaintreason;
};

module.exports = ComplaintReason;
