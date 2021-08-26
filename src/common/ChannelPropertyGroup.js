var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ChannelPropertyGroupProperty = require('./ChannelPropertyGroupProperty');
var Joi = require('joi');

function ChannelPropertyGroup(id) {
  this.path = 'channelpropertygroup';
  this.createPath = this.path;
  this.id = id;

  this.properties = new Collection({
    object: ChannelPropertyGroupProperty,
    path: 'property',
    parent: this
  });

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('Name').description('Name of the channel property group'),
      description: Joi.string().required().label('Description').description('Description of the channel property group'),
      propertyfilter: Joi.string().required().label('Property filter').description(
        'User defined filter for finding properties in the channel property group'
      )
    };
  }
}

ChannelPropertyGroup.prototype = new SingleEntity();
ChannelPropertyGroup.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    propertyfilter: this.propertyfilter
  };
};

module.exports = ChannelPropertyGroup;
