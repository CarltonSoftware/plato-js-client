var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ContactType(id) {
  this.path = 'contacttype';
  this.createPath = this.path;
  this.id = id;
}
ContactType.prototype = new SingleEntity();

ContactType.prototype.validSchema = function() {
  return {
    type: Joi.string().required().label('type')
  }
};

ContactType.prototype.toArray = function() {
  return {
    type: this.type
  };
};

module.exports = ContactType;
