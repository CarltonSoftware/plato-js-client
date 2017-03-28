var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function InspectionType(id) {
  this.path = 'inspectiontype';
  this.createPath = 'inspectiontype';
  this.id = id;
}
InspectionType.prototype = new SingleEntity();

InspectionType.prototype.toArray = function() {
  return {
    inspectiontype: this.inspectiontype,
    schedule: this.schedule,
    gradingunit: this.gradingunit,
    defaultgrading: this.defaultgrading,
  };
};

InspectionType.prototype.validSchema = function() {
  return Joi.object().keys({
    inspectiontype: Joi.string().label('inspection type'),
    schedule: Joi.string().optional().allow('').label('schedule'),
    gradingunit: Joi.string().required().label('grading unit'),
    defaultgrading: Joi.string().optional().allow('').label('default grading'),
  });
};

module.exports = InspectionType;