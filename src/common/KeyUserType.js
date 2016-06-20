var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Role = require('./Role');

function KeyUserType(id) {
  this.path = 'keyusertype';
  this.createPath = 'keyusertype';
  this.id = id;
  this.Role = new Role();
}
KeyUserType.prototype = new SingleEntity();

KeyUserType.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a KeyUserType
    KeyUserType: this.KeyUserType,
    Role: this.Role,
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
