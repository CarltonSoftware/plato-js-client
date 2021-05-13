var SingleEntity = require('./SingleEntity');
var InformationCategory = require('./InformationCategory');
var Joi = require('joi');

function ChannelInformationCategory(id) {
  this.path = 'informationcategory';
  this.createPath = this.path;
  this.id = id;
  this.informationcategory = new InformationCategory();
}
ChannelInformationCategory.prototype = new SingleEntity();

ChannelInformationCategory.prototype.toArray = function() {
  return {
    informationcategoryid: this.informationcategoryid,
  };
};

ChannelInformationCategory.prototype.validSchema = function() {
  return Joi.object().keys({
    informationcategory: Joi.object().label('informationcategory'),
  });
};

module.exports = ChannelInformationCategory;
