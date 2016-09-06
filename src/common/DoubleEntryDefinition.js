var SingleEntity = require('./SingleEntity');

function DoubleEntryDefinition(id) {
  this.path = 'doubleentrydefinition';
  this.createPath = 'doubleentrydefinition';
  this.id = id;
}
DoubleEntryDefinition.prototype = new SingleEntity();

DoubleEntryDefinition.prototype.toArray = function() {
  return {
    payagency: this.payagency,
    payowner: this.payowner,
  };
};

DoubleEntryDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    payagency: Joi.boolean().label('payagency'),
    payowner: Joi.boolean().label('payowner'),
  });
};

module.exports = DoubleEntryDefinition;