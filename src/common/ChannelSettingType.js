var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ChannelSettingType(id) {
  this.path = 'channelsettingtype';
  this.id = id;
}
ChannelSettingType.prototype = new SingleEntity();

ChannelSettingType.prototype.toArray = function() {
  return {
    channelsettingtype: this.channelsettingtype,
    description: this.description,
  };
};

ChannelSettingType.prototype.validSchema = function() {
  return Joi.object().keys({
    channelsettingtype: Joi.string().label('channelsettingtype'),
    description: Joi.string().label('description'),
  });
};

module.exports = ChannelSettingType;
