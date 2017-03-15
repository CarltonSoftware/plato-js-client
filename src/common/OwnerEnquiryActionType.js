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
  };
};

OwnerEnquiryActionType.prototype.validSchema = function() {
  return Joi.object().keys({
    action: Joi.string().required().label('action'),
    description: Joi.string().optional().allow('').label('description'),
  });
};

OwnerEnquiryActionType.prototype.toString = function() {
  return [this.action, this.description].join(' ');
};

module.exports = OwnerEnquiryActionType;
