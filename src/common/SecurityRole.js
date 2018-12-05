var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SecurityRole(id) {
  this.path = 'securityrole';
  this.createPath = 'securityrole';
  this.id = id;
}
SecurityRole.prototype = new SingleEntity();

SecurityRole.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    symfonyroute: this.symfonyroute,
  };
};

SecurityRole.prototype.canAccessRoute = function(route) {
  return this.symfonyroute.includes(route);
}

SecurityRole.validSchema = Joi.object().keys({
  name: Joi.string().required().label('name'),
  description: Joi.string().required().label('description'),
  symfonyroute: Joi.string().optional().allow('').label('symfony route')
});

module.exports = SecurityRole;
