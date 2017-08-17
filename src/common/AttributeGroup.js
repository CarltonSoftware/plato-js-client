var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AttributeGroup(id) {
  this.path = 'attributegroup';
  this.createPath = 'attributegroup';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().min(1).label('name').description('Attribute group name')
    };
  };
}

AttributeGroup.prototype = new SingleEntity();
AttributeGroup.prototype.toArray = function() {
  return {
    name: this.name
  };
};

module.exports = AttributeGroup;
