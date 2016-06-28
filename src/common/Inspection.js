var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Inspector = require('./Inspector');

function Inspection(id) {
  this.path = this.createPath = 'inspection';
  this.id = id;
  this.inspector = new Inspector();
  this.Property = new EntityLink({
    entity: 'Property'
  });
}
Inspection.prototype = new SingleEntity();

Inspection.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a Inspection
    inspectiondate: this.inspectiondate,
    grading: this.grading,
    gradingunit: this.gradingunit,
    inspectorname: this.inspectorname,
    notes: this.notes,
    inspectorid: this.inspector.id,
  };
};

Inspection.prototype.validSchema = function() {
  return Joi.object().keys({
    inspectiondate: Joi.date().optional().label('Inspection Date'),
    grading: Joi.number().optional().label('Grading'),
    gradingunit: Joi.string().optional().allow('').max(16).label('Grading Unit'),
    inspectorname: Joi.string().optional().allow('').max(40).label('Inspector Name'),
    notes: Joi.string().optional().allow('').label('Notes'),
    inspector: Joi.object().required().label('Inspector'),
  });
};

module.exports = Inspection;
