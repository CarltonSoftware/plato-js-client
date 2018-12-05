var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var SecurityRole = require('./SecurityRole');
var StaticCollection = require('./StaticCollection');

function SecurityGroup(id) {
  this.path = 'securitygroup';
  this.createPath = 'securitygroup';
  this.id = id;

  this.securityroles = new StaticCollection({
    object: SecurityRole
  });

  /**
   * Check a role
   *
   * @param {string|Array} role
   */
  this.hasRole = function(role) {
    for (var i in this.securityroles.collection) {
      if (role instanceof Array && role.indexOf(this.securityroles.collection[i].name) >= 0) {
        return true;
      } else if (typeof role === 'string' && this.securityroles.collection[i].name === role) {
        return true;
      }
    }

    return false;
  };

  this.canAccessRoute = function(route) {
    for (let securityrole of this.securityroles.collection) {
      return securityrole.canAccessRoute(route);
    }
  }
}

SecurityGroup.prototype = new SingleEntity();

SecurityGroup.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

SecurityGroup.validSchema = Joi.object().keys({
  name: Joi.string().required().label('name'),
  description: Joi.string().required().label('description'),
});

module.exports = SecurityGroup;
