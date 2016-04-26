var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var Currency = require('./Currency');
var DepositAmountType = require('./DepositAmountType');

function DepositAmount(id) {
  this.path = 'depositamount';
  this.createPath = 'depositamount';
  this.id = id;
  this.branding = new Branding();
  this.currency = new Currency();
  this.depositamounttype = new DepositAmountType();
}
DepositAmount.prototype = new SingleEntity();

DepositAmount.prototype.toCreateArray = function() {
  var r = {
    //TODO: Add in the fields necessary to update a DepositAmount
    type: this.type,
    name: this.name,
    description: this.description,
    currencyid: this.currency.id,
    pricingperiod: this.pricingperiod.pricingperiod,
    depositamounttype: this.depositamounttype.depositamounttype,
    amount: this.amount,
    plusincludedextras: this.plusincludedextras,
    plusadditionalextras: this.plusadditionalextras,
  };

  if (this.type == 'Branding') {
    r.brandingid = this.branding.id;
  }
  if (this.type == 'Property') {
    r.propertyid = this.property.id;
  }
  if (this.type == 'Branding' || this.type == 'Property') {
    r.fromdate = this.fromdate;
    r.todate = this.todate;
  }

  return r;
};

DepositAmount.prototype.toUpdateArray = function() {
  var r = {
    //TODO: Add in the fields necessary to update a DepositAmount
    type: this.type,
    name: this.name,
    description: this.description,
    currencyid: this.currency.id,
    pricingperiod: this.pricingperiod.pricingperiod,
    depositamounttype: this.depositamounttype.depositamounttype,
    amount: this.amount,
    plusincludedextras: this.plusincludedextras,
    plusadditionalextras: this.plusadditionalextras,
  };

  if (this.type == 'Branding') {
    r.brandingid = this.branding.id;
  }
  if (this.type == 'Property') {
    r.propertyid = this.property.id;
  }
  if (this.type == 'Branding' || this.type == 'Property') {
    r.fromdate = this.fromdate;
    r.todate = this.todate;
  }

  return r;
};

module.exports = DepositAmount;
