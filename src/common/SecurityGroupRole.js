var SingleEntity = require('./SingleEntity');
var SecurityGroup = require('./SecurityGroup');
var SecurityRole = require('./SecurityRole');
var Joi = require('joi');

function SecurityGroupRole(id) {
  this.path = 'securitygrouprole';
  this.createPath = 'securitygrouprole';
  this.id = id;
  this.securitygroup = new SecurityGroup();
  this.securityrole = new SecurityRole();
}
SecurityGroupRole.prototype = new SingleEntity();

SecurityGroupRole.prototype.toArray = function() {
  return {
    securitygroupid: this.securitygroup.id,
    securityroleid: this.securityrole.id,
  };
};

SecurityGroupRole.validSchema = Joi.object().keys({
  securitygroup: Joi.object().required().label('Security Group'),
  securityrole: Joi.object().required().label('Security Role'),
});

module.exports = SecurityGroupRole;
