var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var Currency = require('./Currency');
var DepositAmountType = require('./DepositAmountType');
var Joi = require('joi');

function DepositAmount(id) {
  this.path = 'depositamount';
  this.createPath = 'depositamount';
  this.id = id;
  this.branding = new Branding();
  this.currency = new Currency();
  this.depositamounttype = new DepositAmountType();

  this.validSchema = function() {
    var s = {
      type: Joi.string().required().label('type').allow(['General', 'Property', 'Booking', 'Branding']),
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
      currency: Joi.object().required().label('currency'),
      pricingperiod: Joi.object().required().label('pricing period'),
      depositamounttype: Joi.object().required().label('deposit amount type'),
      amount: Joi.string().required().label('amount'),
      decimalplaces: Joi.number().required().label('decimal places'),
      usebrochureprice: Joi.boolean().label('use brochure price?'),
      plusadditionalextras: Joi.boolean().label('plus additional extras?')
    };

    if (['Branding', 'Property'].indexOf(this.type) >= 0) {
      s.fromdate = Joi.date().required().label('from date');
      s.todate = Joi.date().required().label('from date');
      s.minimumamount = Joi.number().required().label('minimum amount');
    }

    if (this.type === 'Property') {
      s.property = Joi.object().required().label('Property');
    }

    if (this.type === 'Branding') {
      s.branding = Joi.object().required().label('Branding');
    }

    return s;
  }
}
DepositAmount.prototype = new SingleEntity();

DepositAmount.prototype.toArray = function() {
  var r = {
    type: this.type,
    name: this.name,
    description: this.description,
    currencyid: this.currency.id,
    pricingperiod: this.pricingperiod.pricingperiod,
    depositamounttype: this.depositamounttype.depositamounttype,
    amount: this.amount,
    decimalplaces: this.decimalplaces,
    plusincludedextras: this.plusincludedextras,
    plusadditionalextras: this.plusadditionalextras,
    usebrochureprice: this.usebrochureprice
  };

  if (this.type == 'Branding') {
    r.brandingid = this.branding.id;
  }
  if (this.type == 'Property') {
    r.propertyid = this.property.id;
  }
  if (this.type !== 'Booking') {
    r.fromdate = this.fromdate;
    r.todate = this.todate;
    r.minimumamount = this.minimumamount;
  }

  return r;
};

module.exports = DepositAmount;
