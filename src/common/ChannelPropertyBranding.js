var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');

var Channel = require('./Channel');
var ChannelSettingValue = require('./ChannelSettingValue');
var ChannelPropertyBrandingInformationCategory = require('./ChannelPropertyBrandingInformationCategory');
var PropertyBranding = require('./PropertyBranding');

var Joi = require('joi');

function ChannelPropertyBranding(id) {
  this.path = 'propertybranding';
  this.createPath = this.path;
  this.id = id;
  this.channel = new Channel();
  this.propertybranding = new PropertyBranding();

  this.informationcategories = new Collection({
    object: ChannelPropertyBrandingInformationCategory,
    path: 'informationcategory',
    parent: this
  });

  this.settingvalues = new Collection({
    object: ChannelSettingValue,
    path: 'settingvalue',
    parent: this
  });
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
