var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ApprovalType(id) {
  this.path = 'approvaltype';
  this.createPath = this.path;
  this.id = id;
}

ApprovalType.prototype = new SingleEntity();
ApprovalType.prototype.toArray = function () {
  return {
    approvaltype: this.approvaltype,
    description: this.description
  }
}

ApprovalType.prototype.validSchema = function () {
  return Joi.object().keys({
    approvaltype: Joi.string().required().label('Approval Type'),
    description: Joi.string().required().label('Description')
  });
};

module.exports = ApprovalType;