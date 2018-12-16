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
    name: this.name
  };
};

SecurityFeature.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('Name')
  });
};

SecurityFeature.prototype.toString = function() {
  return this.name;
};

module.exports = SecurityFeature;