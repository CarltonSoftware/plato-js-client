var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ComplaintHolidayStatus(id) {
  this.path = 'complaintholidaystatus';
  this.createPath = 'complaintholidaystatus';
  this.id = id;
}
ComplaintHolidayStatus.prototype = new SingleEntity();

ComplaintHolidayStatus.prototype.validSchema = function() {
  return {
    complaintholidaystatus: Joi.string().required().label('Complaint Holiday Status'),
    description: Joi.string().required().label('Description')
  };
};

ComplaintHolidayStatus.prototype.toArray = function() {
  return {
    complaintholidaystatus: this.complaintholidaystatus,
    description: this.description
  };
};

ComplaintHolidayStatus.prototype.toString = function() {
  return this.complaintholidaystatus;
};

module.exports = ComplaintHolidayStatus;
