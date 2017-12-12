var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ContactMethodSubtype(id) {
  this.path = 'contactmethodsubtype';
  this.createPath = this.path;
  this.id = id;
  
  this.validSchema = function() {
    return {
      contactmethodsubtype: Joi.string().required().label('contact method sub type'),
    };
  }
}

ContactMethodSubtype.prototype = new SingleEntity();
ContactMethodSubtype.prototype.toArray = function() {
  return {
    'contactmethodsubtype': this.contactmethodsubtype
  };
};

module.exports = ContactMethodSubtype;
