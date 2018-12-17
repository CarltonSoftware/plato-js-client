var SingleEntity = require('./SingleEntity');
var SecurityFeature = require('./SecurityFeature');
var Joi = require('joi');

function PropertySecurityFeature(id) {
  this.path = 'securityfeature';
  this.createPath = this.path;
  this.id = id;
  this.securityfeature = new SecurityFeature();
}
PropertySecurityFeature.prototype = new SingleEntity();

PropertySecurityFeature.prototype.toArray = function() {
  return {
    securityfeatureid: this.securityfeature.id,
    code: this.code,
    notes: this.notes,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

PropertySecurityFeature.prototype.validSchema = function() {
  return Joi.object().keys({
    securityfeature: Joi.object().label('Security Feature'),
    code: Joi.string().label('Code'),
    todate: Joi.allow('').optional().label('To Date'),
    fromdate: Joi.allow('').optional().label('From Date'),
    notes: Joi.allow('').optional().label('Notes')
  });
};

module.exports = PropertySecurityFeature;
