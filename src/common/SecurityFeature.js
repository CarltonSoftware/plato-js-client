var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SecurityFeature(id) {
  this.path = 'securityfeature';
  this.createPath = this.path;
  this.id = id;
}
SecurityFeature.prototype = new SingleEntity();

SecurityFeature.prototype.toArray = function() {
  return {
    'name': this.name
  };
};

SecurityFeature.prototype.validSchema = function() {
  return Joi.object().keys({
    securityfeature: Joi.object().label('Security Feature'),
    code: Joi.string().label('Code'),
    todate: Joi.allow('').optional().label('To Date'),
    fromdate: Joi.allow('').optional().label('From Date'),
    notes: Joi.allow('').optional().label('Notes')
  });
};

module.exports = SecurityFeature;