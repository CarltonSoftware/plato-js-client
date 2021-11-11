var SingleEntity = require('./SingleEntity');
var Property = require('./Property');
var Joi = require('joi');

function ChannelPropertyGroupProperty(id) {
  this.path = 'property';
  this.createPath = this.path;
  this.id = id;
  this.property = new Property();

  this.validSchema = function() {
    return {
      property: Joi.object().required().label('Property')
    };
  }
}

ChannelPropertyGroupProperty.prototype = new SingleEntity();
ChannelPropertyGroupProperty.prototype.toArray = function() {
  return {
    propertyid: this.property.id
  };
};

module.exports = ChannelPropertyGroupProperty;
