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

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
    };
  };

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
    for (var i in this.securityroles.collection) {
      if (this.securityroles.collection[i].canAccessRoute(route)) {
        return true;
      }
    }

    return false;
  }
}

SecurityGroup.prototype = new SingleEntity();

SecurityGroup.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

module.exports = SecurityGroup;
