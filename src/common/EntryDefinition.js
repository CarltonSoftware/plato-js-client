var SingleEntity = require('./SingleEntity');
var Accountvaluetype = require('./AccountValueType');
var Brandsource = require('./BrandSource');
var Account = require('./Account');
var Joi = require('joi');

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
    type: this.type,
    donotdelete: this.donotdelete
  };
  if (this.type == 'Standard') {
    fields.accountid = this.account.id;
  }
  return fields;
};

EntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    debit: Joi.boolean().label('debit'),
    accountvaluetype: Joi.object().required().label('Account Value Type'),
    brandsource: Joi.object().optional().label('Brand Source'),
    type: Joi.string().valid('Standard', 'Extra', 'OwnerCharge', 'Payment').label('type'),
    account: Joi.object().when('type', { is: 'Standard', then: Joi.required() }).label('Account'),
    donotdelete: Joi.boolean().optional().label('do not delete')
  });
};

module.exports = EntryDefinition;