var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SecurityGroup(id) {
  this.path = 'securitygroup';
  this.createPath = 'securitygroup';
  this.id = id;
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
})

module.exports = SecurityGroup;
