var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function PropertyLink(id) {
  this.path = 'link';
  this.createPath = 'link';
  this.id = id;
  this.virtualproperty = new EntityLink({ entity: 'Property' });
}
PropertyLink.prototype = new SingleEntity();

PropertyLink.prototype.toArray = function() {
  return {
    virtualpropertyid: this.virtualproperty.id
  };
};

PropertyLink.prototype.toString = function() {
  return [this.nominalcode, this.description].join(' ');
};

PropertyLink.prototype.validSchema = function() {
  return Joi.object().keys({
    virtualproperty: Joi.object().optional().label('Linked Property')
  });
};

module.exports = PropertyLink;
