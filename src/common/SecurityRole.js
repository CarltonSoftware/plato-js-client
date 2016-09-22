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
    symfonyroute: this.symfonyroute,
  };
};

SecurityRole.validSchema = Joi.object().keys({
  name: Joi.string().required().label('name'),
  symfonyroute: Joi.string().optional().allow('').label('symfony route')
})


module.exports = SecurityRole;