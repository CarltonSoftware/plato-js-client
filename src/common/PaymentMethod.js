var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var PaymentMethodType = require('./PaymentMethodType');

function PaymentMethod(id) {
  this.path = 'paymentmethod';
  this.createPath = 'paymentmethod';
  this.id = id;
  this.paymentmethodtype = new PaymentMethodType();
}
PaymentMethod.prototype = new SingleEntity();

PaymentMethod.prototype.toArray = function() {
  return {
    paymentmethod: this.paymentmethod,
    description: this.description,
    inactive: this.inactive,
    paymentmethodtypeid: this.paymentmethodtype.id
  };
};

PaymentMethod.prototype.validSchema = function() {
  return Joi.object().keys({
    paymentmethod: Joi.string().label('payment method'),
    description: Joi.string().required(),
    inactive: Joi.boolean(),
    paymentmethodtype: Joi.object().label('payment method type')
  });
};

module.exports = PaymentMethod;
