var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function ChannelSettingValue(id) {
  this.path = 'settingvalue';
  this.createPath = this.path;
  this.id = id;
}
ChannelSettingValue.prototype = new SingleEntity();

ChannelSettingValue.prototype.toArray = function() {
    
  var csv = {
    value: this.value
  };
  
  if (this.agency) {
      csv.agencyid = this.agency.id
  }  
  if (this.branding) {
      csv.brandingid = this.branding.id
  }  
  if (this.propertybranding) {
      csv.propertybrandingid = this.propertybranding.id
  }
  return csv;
};

ChannelSettingValue.prototype.validSchema = function() {
  return Joi.object().keys({
    value: Joi.string().label('value'),
  });
};

module.exports = ChannelSettingValue;
