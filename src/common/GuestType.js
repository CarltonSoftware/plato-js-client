var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function GuestType(id) {
  this.path = 'guesttype';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {
  	return {
	    guesttype: Joi.string().required().label('Guest type')
  	};
  }
}
GuestType.prototype = new SingleEntity();

GuestType.prototype.toArray = function() {
  return {
    'guesttype': this.guesttype
  };
};

module.exports = GuestType;
