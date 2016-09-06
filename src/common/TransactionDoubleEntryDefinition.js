var SingleEntity = require('./SingleEntity');

function TransactionDoubleEntryDefinition(id) {
  this.path = 'transactiondefinition';
  this.createPath = 'transactiondefinition';
  this.id = id;
}
TransactionDoubleEntryDefinition.prototype = new SingleEntity();

TransactionDoubleEntryDefinition.prototype.toArray = function() {
  return {
    payagency: this.payagency,
    payowner: this.payowner,
  };
};

TransactionDoubleEntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    payagency: Joi.boolean().label('payagency'),
    payowner: Joi.boolean().label('payowner'),
  });
};

module.exports = TransactionDoubleEntryDefinition;