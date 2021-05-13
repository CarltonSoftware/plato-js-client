var SingleEntity = require('./SingleEntity');
//var EntityLink = require('./EntityLink');
var ChannelSetting = require('./ChannelSetting');
var Joi = require('joi');

function ChannelSettingValue(channelId, channelSettingId, id) {
  this.path = 'channel/' + channelId + '/setting/' + channelSettingId + '/value';
  this.createPath = this.path;
  this.id = id;
  this.channelsetting = new ChannelSetting();
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
  if (this.channelpropertybranding) {
      csv.channelpropertybrandingid = this.channelpropertybranding.id
  }
  return csv;
};

ChannelSettingValue.prototype.validSchema = function() {
  return Joi.object().keys({
    value: Joi.string().label('value'),
  });
};

module.exports = ChannelSettingValue;
