var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var OwnerChargeCode = require('./OwnerChargeCode');
var Account = require('./Account');
var Joi = require('joi');

function EntryDefinitionOwnerChargeCode(transactionId, doubleEntryId, entryId, id) {
  this.path = 'transactiondefinition/' + transactionId + '/doubleentrydefinition/' + doubleEntryId + '/entrydefinition/' + entryId + '/ownerchargecode';
  this.createPath = this.path;
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
  this.account = new Account();
}
EntryDefinitionOwnerChargeCode.prototype = new SingleEntity();

EntryDefinitionOwnerChargeCode.prototype.toArray = function() {
  return {
    ownerchargecodeid: this.ownerchargecode.id,
    accountid: this.account.id,
  };
};

EntryDefinitionOwnerChargeCode.prototype.validSchema = function() {
  return Joi.object().keys({
    ownerchargecode: Joi.object().required().label('Owner Charge Code'),
    account: Joi.object().required().label('Account'),
  });
};

module.exports = EntryDefinitionOwnerChargeCode;
