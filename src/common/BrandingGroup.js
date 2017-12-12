var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');
var Joi = require('joi');

function BrandingGroup(id) {
  this.path = 'brandinggroup';
  this.createPath = 'brandinggroup';
  this.id = id;
  this.agency = new Agency();

  this.validSchema = function() {
    return {
      code: Joi.string().required().min(2).max(4).uppercase().label('Code'),
      name: Joi.string().required().label('Name'),
      agency: Joi.object().required().label('Agency')
    };
  };
}

BrandingGroup.prototype = new SingleEntity();
BrandingGroup.prototype.toArray = function() {
  return {
    brandinggroupcode: this.code,
    brandinggroup: this.name,
    agencyid: this.agency.id
  };
};

BrandingGroup.prototype.toString = function() {
  return this.name;
};

module.exports = BrandingGroup;
