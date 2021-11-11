var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function Channel(id) {
  this.path = 'channel';
  this.createPath = this.path;
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
    affiliateid: this.affiliate.id
  };
};

Channel.prototype.validSchema = function() {
  return Joi.object().keys({
    channelreference: Joi.string().label('channel reference'),
    channelname: Joi.string().label('channel name'),
    affiliate: Joi.object().optional().label('Affiliate'),
  });
};

module.exports = Channel;
