var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ExtraBranding = require('./ExtraBranding');
var Account = require('./Account');
var Joi = require('joi');

function EntryDefinitionExtraBranding(transactionId, doubleEntryId, entryId, id) {
  this.path = 'transactiondefinition/' + transactionId + '/doubleentrydefinition/' + doubleEntryId + '/entrydefinition/' + entryId + '/extrabranding';
  this.createPath = this.path;
  this.id = id;
  this.extrabranding = new ExtraBranding();
  this.account = new Account();
}
EntryDefinitionExtraBranding.prototype = new SingleEntity();

EntryDefinitionExtraBranding.prototype.toArray = function() {
  return {
    extrabrandingid: this.extrabranding.id,
    accountid: this.account.id
  };
};

EntryDefinitionExtraBranding.prototype.validSchema = function() {
  return Joi.object().keys({
    extrabranding: Joi.object().required().label('Extra Branding'),
    account: Joi.object().required().label('Account'),
  });
};

module.exports = EntryDefinitionExtraBranding;
