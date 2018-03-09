var SingleEntity = require('./SingleEntity');
// var EntityLink = require('./EntityLink');
var SecurityRole = require('./SecurityRole');
var SecurityGroup = require('./SecurityGroup');
var Joi = require('joi');

function ActorSecurity(id) {
  this.path = 'actorsecurity';
  this.createPath = 'actorsecurity';
  this.id = id;
  // this.actor = new Actor(); // causes an infinite loop
  this.securityrole = new SecurityRole();
  this.securitygroup = new SecurityGroup();
}
ActorSecurity.prototype = new SingleEntity();

ActorSecurity.prototype.toArray = function() {
  var fields = {
    actorid: this.actor.id,
    type: this.type
  };
  if (this.type == 'Role') {
    fields.securityroleid = this.securityrole.id;
  } else if (this.type == 'Group') {
    fields.securitygroupid = this.securitygroup.id;
  }
  return fields;
};

ActorSecurity.validSchema = Joi.object().keys({
  actor: Joi.object().required().label('Actor'),
  type: Joi.string().valid('Role', 'Group').label('type'),
  securityrole: Joi.when('type', { is: 'Role',then: Joi.object().required().label('role'), otherwise: Joi.forbidden() }),
  securitygroup: Joi.when('type', { is: 'Group',then: Joi.object().required().label('group'), otherwise: Joi.forbidden() })
});


module.exports = ActorSecurity;
