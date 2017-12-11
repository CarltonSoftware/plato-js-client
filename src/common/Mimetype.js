var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Mimetype(id) {
  this.path = 'mimetype';
  this.createPath = 'mimetype';
  this.id = id;

  this.validSchema = function() {
  	return {
      name: Joi.string().required().label('Name'),
      shortname: Joi.string().required().label('Short name')
  	};
  };

  this.toArray = function() {
    return {
      name: this.name,
      shortname: this.shortname
    };
  };
}
Mimetype.prototype = new SingleEntity();

module.exports = Mimetype;
