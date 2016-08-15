var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PaymentMethod(id) {
  this.path = 'paymentmethod';
  this.createPath = 'paymentmethod';
  this.id = id;
}
PaymentMethod.prototype = new SingleEntity();

PaymentMethod.prototype.toArray = function() {
  return {
    paymentmethod: this.paymentmethod,
    description: this.description,
  };
};

PaymentMethod.prototype.validSchema = function() {
  return Joi.object().keys({
    paymentmethod: Joi.string().label('PaymentMethod'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = PaymentMethod;
