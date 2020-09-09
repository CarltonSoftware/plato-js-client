var SingleEntity = require('./SingleEntity');
var ChannelSettingType = require('./ChannelSettingType');
var Joi = require('joi');

function ChannelSetting(id) {
  this.path = 'setting';
  this.createPath = this.path;
  this.id = id;
  this.channelsettingtype = new ChannelSettingType();
}
ChannelSetting.prototype = new SingleEntity();

ChannelSetting.prototype.toArray = function() {
  return {
    channelsettingtypeid: this.channelsettingtype.id,
  };
};

ChannelSetting.prototype.validSchema = function() {
  return Joi.object().keys({
    channelsettingtype: Joi.object().label('channelsettingtype'),
  });
};

module.exports = ChannelSetting;
