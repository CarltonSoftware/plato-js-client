var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function Channel(id) {
  this.path = 'channel';
  this.id = id;
  this.affiliate = new EntityLink({
    entity: 'Affiliate'
  });
}
Channel.prototype = new SingleEntity();

Channel.prototype.toArray = function() {
  return {
    channelreference: this.channelreference,
    channelname: this.channelname,
  };
};

Channel.prototype.validSchema = function() {
  return Joi.object().keys({
    channelreference: Joi.string().label('channelsettingtype'),
    channelname: Joi.string().label('description'),
  });
};

module.exports = Channel;
