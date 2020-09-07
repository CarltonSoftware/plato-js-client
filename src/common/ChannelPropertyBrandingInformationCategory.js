var SingleEntity = require('./SingleEntity');
var InformationCategory = require('./InformationCategory');
var Joi = require('joi');

function ChannelPropertyBrandingInformationCategory(id) {
  this.path = 'informationcategory';
  this.id = id;
  this.informationcategory = new InformationCategory();
}
ChannelPropertyBrandingInformationCategory.prototype = new SingleEntity();

ChannelPropertyBrandingInformationCategory.prototype.toArray = function() {
  return {
    informationcategoryid: this.informationcategory.id,
    updateddatetime: this.updateddatetime,
    pusheddatetime: this.pusheddatetime,
    processing: this.processing,
  };
};

ChannelPropertyBrandingInformationCategory.prototype.validSchema = function() {
  return Joi.object().keys({
    informationcategory: Joi.object().label('informationcategory'),
    updateddatetime: Joi.date().label('updateddatetime'),
    pusheddatetime: Joi.date().label('pusheddatetime'),
    processing: Joi.boolean().label('processing'),
  });
};

module.exports = ChannelPropertyBrandingInformationCategory;
