var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function DoubleEntryDefinition(transactionDefinitionId, id) {
  this.path = 'transactiondefinition/' + transactionDefinitionId + '/doubleentrydefinition';
  this.createPath = this.path;
  this.id = id;
}
DoubleEntryDefinition.prototype = new SingleEntity();

DoubleEntryDefinition.prototype.toArray = function() {
  return {
    payagency: this.payagency,
    payowner: this.payowner,
    donotmodify: this.donotmodify
  };
};

DoubleEntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    payagency: Joi.boolean().label('payagency'),
    payowner: Joi.boolean().label('payowner'),
    donotmodify: Joi.boolean().optional().label('do not modify')
  });
};

module.exports = DoubleEntryDefinition;