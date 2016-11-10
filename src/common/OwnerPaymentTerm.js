var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var Collection = require('./Collection');
var OwnerPaymentTermExtra = require('./OwnerPaymentTermExtra');

function OwnerPaymentTerm(id) {
  this.path = 'ownerpaymentterms';
  this.createPath = 'ownerpaymentterms';
  this.id = id;

  this.ondeposit = false;
  this.oninterim = false;
  this.onbalance = false;
  this.amountperperiod = 0;
  this.percentageofpayment = 0;
  this.percentageofbasic = 0;
  this.currency = new Currency();

  // Ownerpaid can be one of:
  // empty: Owner is not paid anything until after the holiday
  // As Received: Paid as received
  // Last: Owner is paid anything left after all the commission has been taken
  // First: Owner is paid as much as possible as soon as possible
  this.ownerpaid = '';

  this.extras = new Collection({
    object: OwnerPaymentTermExtra,
    path: 'extra',
    parent: this
  });
}

OwnerPaymentTerm.prototype = new SingleEntity();
OwnerPaymentTerm.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    ondeposit: this.ondeposit,
    oninterim: this.oninterim,
    onbalance: this.onbalance,
    amountperperiod: this.amountperperiod,
    percentageofbasic: this.percentageofbasic,
    percentageofpayment: this.percentageofpayment,
    ownerpaid: this.ownerpaid,
    currencyid: this.currency.id
  };
};

module.exports = OwnerPaymentTerm;
