var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');

function ExtraBrandingConfiguration(brandingId) {
    this.path = 'configuration';
    this.createPath = 'configuration';
    this.id = 0;
    this.vatband = new VatBand();
}
ExtraBrandingConfiguration.prototype = new SingleEntity();

ExtraBrandingConfiguration.prototype.toCreateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory ? 'true' : 'false',
    included: this.included ? 'true' : 'false',
    payagency: this.payagency ? 'true' : 'false',
    payowner: this.payowner ? 'true' : 'false',
    visibletoowner: this.visibletoowner ? 'true' : 'false',
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer ? 'true' : 'false',
    customerselectable: this.customerselectable ? 'true' : 'false',
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    type: this.type,
  };
};

ExtraBrandingConfiguration.prototype.toUpdateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory,
    included: this.included,
    payagency: this.payagency,
    payowner: this.payowner,
    visibletoowner: this.visibletoowner,
    vatband: this.vatband,
    visibletocustomer: this.visibletocustomer,
    customerselectable: this.customerselectable,
    maximumquantity: this.maximumquantity,
    decimalplaces: this.decimalplaces,
    priceoverrideallowed: this.priceoverrideallowed ? 'true' : 'false',
    quantityoverrideallowed: this.quantityoverrideallowed? 'true' : 'false',
    type: this.type,
  };
};

module.exports = ExtraBrandingConfiguration;
