var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ComplaintSelectedReason(id) {
  this.path = 'complaintselectedreason';
  this.createPath = 'complaintselectedreason';
  this.id = id;
}
ComplaintSelectedReason.prototype = new SingleEntity();

ComplaintSelectedReason.prototype.validSchema = function() {
  return {
    complaintreasonid: Joi.number().required().label('Complaint Reason Id'),
    complaintid: Joi.number().required().label('Complaint Id')
  };
};

ComplaintSelectedReason.prototype.toArray = function() {
  return {
    complaintreasonid: this.complaintreasonid,
    complaintid: this.complaintid
  };
};

module.exports = ComplaintSelectedReason;
