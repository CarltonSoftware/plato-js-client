var SingleEntity = require('./SingleEntity');
var CostItemCode = require('./CostItemCode');
var Account = require('./Account');
var Joi = require('joi');

function EntryDefinitionCostItemCode(transactionId, doubleEntryId, entryId, id) {
  this.path = 'transactiondefinition/' + transactionId + '/doubleentrydefinition/' + doubleEntryId + '/entrydefinition/' + entryId + '/costitemcode';
  this.createPath = this.path;
  this.id = id;
  this.costitemcode = new CostItemCode();
  this.account = new Account();
}
EntryDefinitionCostItemCode.prototype = new SingleEntity();

EntryDefinitionCostItemCode.prototype.toArray = function() {
  return {
    costitemcodeid: this.costitemcode.id,
    accountid: this.account.id,
  };
};

EntryDefinitionCostItemCode.prototype.validSchema = function() {
  return Joi.object().keys({
    costitemcode: Joi.object().required().label('Cost Item Code'),
    account: Joi.object().required().label('Account'),
  });
};

module.exports = EntryDefinitionCostItemCode;
