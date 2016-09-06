var SingleEntity = require('./SingleEntity');

function AccountingDateDefinition(id) {
  this.path = 'accountingdatedefinition';
  this.createPath = 'accountingdatedefinition';
  this.id = id;
}
AccountingDateDefinition.prototype = new SingleEntity();

AccountingDateDefinition.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

AccountingDateDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = AccountingDateDefinition;