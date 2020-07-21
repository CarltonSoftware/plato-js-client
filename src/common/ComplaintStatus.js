var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ComplaintStatus(id) {
  this.path = 'complaintstatus';
  this.createPath = 'complaintstatus';
  this.id = id;
}
ComplaintStatus.prototype = new SingleEntity();

ComplaintStatus.prototype.validSchema = function() {
  return {
    complaintstatus: Joi.string().required().label('Complaint Status'),
    description: Joi.string().required().label('Description')
  };
};

ComplaintStatus.prototype.toArray = function() {
  return {
    complaintstatus: this.complaintstatus,
    description: this.description
  };
};

ComplaintStatus.prototype.toString = function() {
  return this.complaintstatus;
};

module.exports = ComplaintStatus;
