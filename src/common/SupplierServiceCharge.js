var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var VatBand = require('./VatBand');
var OwnerChargeCode = require('./OwnerChargeCode');
var Joi = require('joi');

function SupplierServiceCharge(id) {
  this.path = 'charge';
  this.createPath = 'charge';
  this.id = id;
  this.currency = new Currency();
  this.vatband = new VatBand();
  this.ownerchargecode = new OwnerChargeCode();
}
SupplierServiceCharge.prototype = new SingleEntity();

SupplierServiceCharge.prototype.toArray = function() {
  return {
    type: this.type,
    charge: this.charge,
    includesvat: this.includesvat,
    autoaddcustomer: this.autoaddcustomer,
    autoaddowner: this.autoaddowner,
    fromdate: this.fromdate,
    todate: this.todate,
    currencyid: this.currency.id,
    vatbandid: this.vatband && this.vatband.id,
    ownerchargecodeid: this.ownerchargecode.id
  };
};

SupplierServiceCharge.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('From Date'),
    todate: Joi.string().required().label('To Date'),
    type: Joi.string().required().label('Type'),
    ownerchargecode: Joi.when('type', {
      is: 'OwnerCharge',
      then: Joi.object().required().label('Owner Charge Code'),
      otherwise: Joi.forbidden()
    }),
    vatband: Joi.object().optional().label('Vat Band'),
    currency: Joi.object().required().label('Currency'),
    charge: Joi.number().required().label('Charge'),
    includesvat: Joi.boolean().required().label('Includes VAT'),
    autoaddcustomer: Joi.boolean().required().label('Auto add to customer'),
    autoaddowner: Joi.boolean().required().label('Auto add to owner')
  });
};
module.exports = SupplierServiceCharge;
