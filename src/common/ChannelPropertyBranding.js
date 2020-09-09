var SingleEntity = require('./SingleEntity');
var Channel = require('./Channel');
var PropertyBranding = require('./PropertyBranding');
var Joi = require('joi');

function ChannelPropertyBranding(id) {
  this.path = 'propertybranding';
  this.createPath = this.path;
  this.id = id;
  this.channel = new Channel();
  this.propertybranding = new PropertyBranding();
}
ChannelPropertyBranding.prototype = new SingleEntity();

ChannelPropertyBranding.prototype.toArray = function() {
  return {
    propertybrandingid: this.propertybranding.id,
    channelpropertyreference: this.channelpropertyreference,
  };
};

ChannelPropertyBranding.prototype.validSchema = function() {
  return Joi.object().keys({
    propertybranding: Joi.object().label('propertybranding'),
    channelpropertyreference: Joi.string().label('channelpropertyreference'),
  });
};

module.exports = ChannelPropertyBranding;
