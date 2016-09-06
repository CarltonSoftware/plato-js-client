var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Accountingdatedefinition = require('./AccountingDateDefinition');
var Transactionsource = require('./TransactionSource');

function TransactionDefinition(id) {
  this.path = 'transactiondefinition';
  this.createPath = 'transactiondefinition';
  this.id = id;
  this.AccountingDateDefinition = new Accountingdatedefinition();
  this.TransactionSource = new Transactionsource();
}
TransactionDefinition.prototype = new SingleEntity();

TransactionDefinition.prototype.toArray = function() {
  return {
    transactionname: this.transactionname,
    description: this.description,
    accountingdatedefinitionid: this.accountingdatedefinition.id,
    transactionsourceid: this.transactionsource.id,
  };
};

TransactionDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    transactionname: Joi.string().required().label('Transaction Name'),
    description: Joi.string().required().label('Description'),
    accountingdatedefinitionid: Joi.number().required().label('Accounting Date Definition'),
    transactionsourceid: Joi.number().required().label('Transaction Source'),
  });
};

module.exports = TransactionDefinition;
