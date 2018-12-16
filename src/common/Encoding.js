var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Encoding(id) {
  this.path = 'encoding';
  this.createPath = this.path;
  this.id = id;
}
Encoding.prototype = new SingleEntity();

Encoding.prototype.toArray = function() {
  return {
    encoding: this.encoding
  };
};

Encoding.prototype.validSchema = function() {
  return {
    encoding: Joi.string().required().label('encoding')
  };
};

module.exports = Encoding;