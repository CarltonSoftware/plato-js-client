var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerEnquiryActionType(id) {
  this.path = 'ownerenquiryactiontype';
  this.createPath = 'ownerenquiryactiontype';
  this.id = id;
}
OwnerEnquiryActionType.prototype = new SingleEntity();

OwnerEnquiryActionType.prototype.toArray = function() {
  return {
    action: this.action,
    description: this.description,
    followupbufferkey: this.followupbufferkey,
    followupbufferamount: this.followupbufferamount
  };
};

OwnerEnquiryActionType.prototype.validSchema = function() {
  return Joi.object().keys({
    action: Joi.string().required().label('action'),
    description: Joi.string().optional().allow('').label('description'),
    followupbufferkey: Joi.string().optional().allow('').label('followupbufferkey').description("follow-up bufer key, e.g. 'days' or 'months'"),
    followupbufferamount: Joi.number().optional().label('followupbufferamount').description('follow-up buffer amount, e.g. 3 (days or months)')
  });
};

OwnerEnquiryActionType.prototype.toString = function() {
  return [this.action, this.description].join(' ');
};

module.exports = OwnerEnquiryActionType;
