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
    inactive: this.inactive,
    description: this.description,
    weight: this.weight
  };
};

InspectionType.prototype.toString = function() {
  return this.inspectiontype;
};

InspectionType.prototype.validSchema = function() {
  var schedules = [];
  var periods = ['Week', 'Month', 'Year'];
  for (var p in periods) {
    for (var j=1; j<12; j++) {
      schedules.push([j, ' ', periods[p], j > 1 ? 's' : ''].join(''));
    }
  }

  return Joi.object().keys({
    inspectiontype: Joi.string().label('inspection type'),
    schedule: Joi.string().required().allow(schedules).label('schedule'),
    gradingunit: Joi.string().required().label('grading unit'),
    description: Joi.string().required().label('description'),
    defaultgrading: Joi.string().optional().allow('').label('default grading'),
    inactive: Joi.boolean().optional().label('inactive'),
    weight: Joi.number().optional().label('weight')
  });
};

module.exports = InspectionType;