var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Accountvaluetype = require('./AccountValueType');
var Brandsource = require('./BrandSource');
var Account = require('./Account');

function EntryDefinition(transactionId, doubleEntryId, id) {
  this.path = 'transactiondefinition/' + transactionId + '/doubleentrydefinition/' + doubleEntryId + '/entrydefinition';
  this.createPath = this.path;
  this.id = id;
  this.accountvaluetype = new Accountvaluetype();
  this.brandsource = new Brandsource();
  this.account = new Account();
}
EntryDefinition.prototype = new SingleEntity();

EntryDefinition.prototype.toArray = function() {
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

EntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    debit: Joi.boolean().label('debit'),
    accountvaluetype: Joi.object().label('AccountValueType'),
    brandsource: Joi.object().label('BrandSource'),
    type: Joi.string().label('type'),
    account: Joi.object().label('Account'),
  });
};

module.exports = EntryDefinition;