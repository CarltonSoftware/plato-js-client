var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
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
  this.workordertemplate = new EntityLink({ entity: 'WorkOrder' });
}
SupplierServiceCharge.prototype = new SingleEntity();

SupplierServiceCharge.prototype.toUpdateArray = function() {
  return {
    type: this.type,
    charge: this.charge,
    includesvat: this.includesvat,
    autoaddcustomer: this.autoaddcustomer,
    autoaddowner: this.autoaddowner,
    autoaddagency: this.autoaddagency,
    fromdate: this.fromdate,
    todate: this.todate,
    ownerchargecodeid: this.ownerchargecode.id,
    workordertemplateid: this.workordertemplate.id,
    description: this.description,
  };
};
SupplierServiceCharge.prototype.toCreateArray = function() {
  var array = this.toUpdateArray();
  array.currencyid = this.currency.id;
  array.vatbandid = this.vatband && this.vatband.id;
  return array;
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
    workordertemplate: Joi.when('type', {
      is: 'WorkOrder',
      then: Joi.object().required().label('Work Order Template'),
      otherwise: Joi.forbidden()
    }),
    vatband: Joi.object().optional().label('Vat Band'),
    currency: Joi.object().required().label('Currency'),
    charge: Joi.number().required().label('Charge'),
    includesvat: Joi.boolean().required().label('Includes VAT'),
    autoaddcustomer: Joi.boolean().required().label('Auto add to customer'),
    autoaddowner: Joi.boolean().required().label('Auto add to owner'),
    autoaddagency: Joi.boolean().required().label('Auto add to agency'),
    description: Joi.string().optional().label('Description'),
  });
};
module.exports = SupplierServiceCharge;
