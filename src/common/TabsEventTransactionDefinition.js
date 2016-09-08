var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var TransactionDefinition = require('./TransactionDefinition');
var Joi = require('joi');

function TabsEventTransactionDefinition(tabsEventId, id) {
  this.path = 'tabsevent/'+tabsEventId+'/transactiondefinition';
  this.createPath = this.path;
  this.id = id;
  this.transactiondefinition = new TransactionDefinition();
}
TabsEventTransactionDefinition.prototype = new SingleEntity();

TabsEventTransactionDefinition.prototype.toArray = function() {
  return {
    transactiondefinitionid: this.transactiondefinition.id,
  };
};

TabsEventTransactionDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    transactiondefinition: Joi.object().required().label('Transaction Definition'),
  });
};

module.exports = TabsEventTransactionDefinition;
