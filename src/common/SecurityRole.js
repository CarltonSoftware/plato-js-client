var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SecurityRole(id) {
  this.path = 'securityrole';
  this.createPath = 'securityrole';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
      symfonyroute: Joi.array().optional().label('symfony route')
    };
  };
}
SecurityRole.prototype = new SingleEntity();

SecurityRole.prototype.toArray = function() {
  var routes = [];
  if (Array.isArray(this.symfonyroute)) {
    routes = this.symfonyroute.map(function(r) {
      return r.id;
    });
    this.symfonyroute = routes;
  }

  return {
    name: this.name,
    description: this.description,
    symfonyroute: JSON.stringify(routes)
  };
};

SecurityRole.prototype.canAccessRoute = function(route) {
  return typeof this.symfonyroute === 'object' 
    && this.symfonyroute 
    && this.symfonyroute.includes 
    && this.symfonyroute.includes(route);
}

module.exports = SecurityRole;
