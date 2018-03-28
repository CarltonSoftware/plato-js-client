var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Mimetype(id) {
  this.path = 'mimetype';
  this.createPath = 'mimetype';
  this.id = id;
}
Mimetype.prototype = new SingleEntity();

Mimetype.prototype.validSchema = function() {
    return {
      name: Joi.string().required().label('Name'),
      shortname: Joi.string().required().label('Short name')
  };
};

Mimetype.prototype.toArray = function() {
  return {
    name: this.name,
    shortname: this.shortname
  };
};


module.exports = Mimetype;
