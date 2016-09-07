var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Accountingdatedefinition = require('./AccountingDateDefinition');
var Transactionsource = require('./TransactionSource');
var Joi = require('joi');
var DoubleEntryDefinition = require('./DoubleEntryDefinition');

function TransactionDefinition(id) {
  this.path = 'transactiondefinition';
  this.createPath = 'transactiondefinition';
  this.id = id;
  this.accountingdatedefinition = new Accountingdatedefinition();
  this.transactionsource = new Transactionsource();
  this.doubleentrydefinitions = new Collection({
    object: DoubleEntryDefinition,
    path: 'doubleentrydefinition',
    parent: this
  });
}
TransactionDefinition.prototype = new SingleEntity();

TransactionDefinition.prototype.toArray = function() {
  return {
    transactionname: this.transactionname,
    description: this.description,
    accountingdatedefinitionid: this.accountingdatedefinition.id,
    transactionsourceid: this.transactionsource.id,
    requiresbooking: this.requiresbooking,
    requiresbookingextra: this.requiresbookingextra,
    requirescustomer: this.requirescustomer,
    requiresactorpayment: this.requiresactorpayment,
    requiresbookingpayment: this.requiresbookingpayment,
    requiresowner: this.requiresowner,
    requiresownercharge: this.requiresownercharge,
    requiresownerpayment: this.requiresownerpayment,
    requiresproperty: this.requiresproperty
  };
};

TransactionDefinition.prototype.validSchema = function() {
  return Joi.object().keys({
    transactionname: Joi.string().required().label('Transaction Name'),
    description: Joi.string().required().label('Description'),
    accountingdatedefinition: Joi.object().required().label('Accounting Date Definition'),
    transactionsource: Joi.object().required().label('Transaction Source'),
    requiresbooking: Joi.boolean().optional().label('Requires Booking'),
    requiresbookingextra: Joi.boolean().optional().label('Requires Booking Extra'),
    requirescustomer: Joi.boolean().optional().label('Requires Customer'),
    requiresactorpayment: Joi.boolean().optional().label('Requires Actor Payment'),
    requiresbookingpayment: Joi.boolean().optional().label('Requires Booking Payment'),
    requiresowner: Joi.boolean().optional().label('Requires Owner'),
    requiresownercharge: Joi.boolean().optional().label('Requires Owner Charge'),
    requiresownerpayment: Joi.boolean().optional().label('Requires Owner Payment'),
    requiresproperty: Joi.boolean().optional().label('Requires Property')
  });
};

module.exports = TransactionDefinition;
