var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function ChannelSettingValue(id) {
  this.path = 'settingvalue';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });
}
ChannelSettingValue.prototype = new SingleEntity();

ChannelSettingValue.prototype.toArray = function() {
  return {
    value: this.value,
    agencyid: this.agency.id,
  };
};

ChannelSettingValue.prototype.validSchema = function() {
  return Joi.object().keys({
    value: Joi.string().label('value'),
  });
};

module.exports = ChannelSettingValue;
