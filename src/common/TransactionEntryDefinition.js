var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Accountvaluetype = require('./AccountValueType');
var Brandsource = require('./BrandSource');
var Account = require('./Account');

function TransactionEntryDefinition(id) {
  this.path = 'transactiondefinition';
  this.createPath = 'transactiondefinition';
  this.id = id;
  this.AccountValueType = new Accountvaluetype();
  this.BrandSource = new Brandsource();
  this.Account = new Account();
}
TransactionEntryDefinition.prototype = new SingleEntity();

TransactionEntryDefinition.prototype.toArray = function() {
  var fields = {
    debit: this.debit,
    accountvaluetypeid: this.accountvaluetype.id,
    brandsourceid: this.brandsource.id,
    type: this.type
  }
  if (this.type == 'Standard') {
    fields.accountid = this.account.id
  }
  return fields;
};

TransactionEntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    debit: Joi.boolean().label('debit'),
    accountvaluetype: Joi.object().label('AccountValueType'),
    brandsource: Joi.object().label('BrandSource'),
    type: Joi.string().label('type'),
    account: Joi.object().label('Account'),
  });
};

module.exports = TransactionEntryDefinition;