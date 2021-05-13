var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ServiceTag(id) {
  this.path = 'servicetag';
  this.createPath = 'servicetag';
  this.id = id;
}
ServiceTag.prototype = new SingleEntity();

ServiceTag.prototype.toArray = function() {
  return {
    name: this.name,
    logo: this.logo,  
  };
};

ServiceTag.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().label('name'),
    logo: Joi.string().label('logo'),
  });
};

module.exports = ServiceTag;
