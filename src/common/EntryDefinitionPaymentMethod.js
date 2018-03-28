var SingleEntity = require('./SingleEntity');
var PaymentMethod = require('./PaymentMethod');
var Account = require('./Account');
var Joi = require('joi');

function EntryDefinitionPaymentMethod(transactionId, doubleEntryId, entryId, id) {
  this.path = 'transactiondefinition/' + transactionId + '/doubleentrydefinition/' + doubleEntryId + '/entrydefinition/' + entryId + '/paymentmethod';
  this.createPath = this.path;
  this.id = id;
  this.paymentmethod = new PaymentMethod();
  this.account = new Account();
}
EntryDefinitionPaymentMethod.prototype = new SingleEntity();

EntryDefinitionPaymentMethod.prototype.toArray = function() {
  return {
    paymentmethodid: this.paymentmethod.id,
    accountid: this.account.id,
  };
};

EntryDefinitionPaymentMethod.prototype.validSchema = function() {
  return Joi.object().keys({
    paymentmethod: Joi.object().required().label('Payment Method'),
    account: Joi.object().required().label('Account'),
  });
};

module.exports = EntryDefinitionPaymentMethod;
