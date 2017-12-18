var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var Role = require('./Role');

function KeyUserType(id) {
  this.path = 'keyusertype';
  this.createPath = 'keyusertype';
  this.id = id;
  this.role = new Role();
}
KeyUserType.prototype = new SingleEntity();

KeyUserType.prototype.toArray = function() {
  return {
    keyusertype: this.keyusertype,
    roleid: this.role && this.role.id,
    description: this.description,
  };
};

KeyUserType.prototype.validSchema = function() {
  return Joi.object().keys({
    keyusertype: Joi.string().label('Key User Type'),
    role: Joi.object().optional().label('Role'),
    description: Joi.string().optional().allow('').label('Description'),
  });
};

module.exports = KeyUserType;
