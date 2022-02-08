var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var ComplaintReason = require('./ComplaintReason');

function ComplaintSelectedReason(id) {
  this.path = 'selectedreason';
  this.createPath = this.path;
  this.id = id;
  this.complaintreason = new ComplaintReason();
}
ComplaintSelectedReason.prototype = new SingleEntity();

ComplaintSelectedReason.prototype.validSchema = function() {
  return {
    complaintreason: Joi.number().required().label('Complaint Reason')
  };
};

ComplaintSelectedReason.prototype.toArray = function() {
  return {
    complaintreasonid: this.complaintreason.id
  };
};

module.exports = ComplaintSelectedReason;
