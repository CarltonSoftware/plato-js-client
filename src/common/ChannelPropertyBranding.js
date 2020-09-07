var SingleEntity = require('./SingleEntity');
var PropertyBranding = require('./PropertyBranding');
var Joi = require('joi');

function ChannelPropertyBranding(id) {
  this.path = 'propertybranding';
  this.id = id;
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
