var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ContactReason(id) {
  this.path = 'contactreason';
  this.createPath = 'contactreason';
  this.id = id;
}
ContactReason.prototype = new SingleEntity();

ContactReason.prototype.validSchema = function() {
  return {
    contactreason: Joi.string().required().label('Contact Reason'),
    description: Joi.string().required().label('Description')
  };
};

ContactReason.prototype.toArray = function() {
  return {
    contactreason: this.contactreason,
    description: this.description
  };
};

module.exports = ContactReason;
