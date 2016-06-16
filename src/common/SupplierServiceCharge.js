var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var VatBand = require('./VatBand');

function SupplierServiceCharge(id) {
  this.path = 'charge';
  this.createPath = 'charge';
  this.id = id;
  this.currency = new Currency();
  this.vatband = new VatBand();
}
SupplierServiceCharge.prototype = new SingleEntity();

SupplierServiceCharge.prototype.toArray = function() {
  return {  
    type: this.type,
    charge: this.charge,
    autoaddtocustomer: this.autoaddtocustomer,
    autoaddtoowner: this.autoaddtoowner,
    fromdate: this.fromdate,
    todate: this.todate,
    currencyid: this.currency.id,
    vatbandid: this.vatband.id
  };
};

module.exports = PropertySupplierService;
