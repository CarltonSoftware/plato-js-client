var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CreditorPaymentMethod(id) {
  this.path = 'creditorpaymentmethod';
  this.createPath = this.path;
  this.id = id;
}
CreditorPaymentMethod.prototype = new SingleEntity();

CreditorPaymentMethod.prototype.toArray = function() {
  return {
    creditorpaymentmethod: this.creditorpaymentmethod,
    requiresbankaccount: this.requiresbankaccount
  };
};

module.exports = CreditorPaymentMethod;
