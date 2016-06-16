var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var VatBand = require('./VatBand');
var OwnerChargeCode = require('./OwnerChargeCode');

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
    vatbandid: this.vatband.id,
    ownerchargecodeid: this.ownerchargecode.id
  };
};

module.exports = SupplierServiceCharge;
