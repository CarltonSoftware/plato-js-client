var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Role(id) {
  this.path = 'role';
  this.createPath = this.path;
  this.id = id;
}
Role.prototype = new SingleEntity();

Role.prototype.validSchema = function() {
  return {
    name: Joi.string().required().min(1).label('name').description('Role name'),
    donotdelete: Joi.boolean().required().label('Do not delete').description('This removes the delete option from the role admin screen')
  };
};

Role.prototype.toArray = function() {
  return {
    name: this.name,
    donotdelete: this.donotdelete,
  };
};

module.exports = Role;
