var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var InspectionType = require('./InspectionType');

function Inspection(id) {
  this.path = this.createPath = 'inspection';
  this.id = id;
  this.inspectiontype = new InspectionType();
  this.Property = new EntityLink({
    entity: 'Property'
  });
}
Inspection.prototype = new SingleEntity();

Inspection.prototype.toArray = function() {
  return {
    inspectiondate: this.inspectiondate,
    grading: this.grading,
    gradingunit: this.gradingunit,
    inspectorname: this.inspectorname,
    notes: this.notes,
    inspectiontypeid: this.inspectiontype.id,
    reinspectiondate: this.reinspectiondate
  };
};

Inspection.prototype.validSchema = function() {
  return Joi.object().keys({
    inspectiondate: Joi.date().optional().label('Inspection Date'),
    grading: Joi.number().optional().label('Grading'),
    gradingunit: Joi.string().optional().allow('').max(16).label('Grading Unit'),
    inspectorname: Joi.string().optional().allow('').max(40).label('Inspector Name'),
    notes: Joi.string().optional().allow('').label('Notes'),
    inspectiontype: Joi.object().required().label('Inspection Type'),
    reinspectiondate: Joi.date().optional().allow('').label('Reinspection date')
  });
};

module.exports = Inspection;
