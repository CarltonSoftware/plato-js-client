var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');

function ExtraBrandingConfiguration(extraId, brandingId) {
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/configuration';
    this.createPath = this.path;
    this.id = 0;
    this.vatband = new VatBand;
}
ExtraBrandingConfiguration.prototype = new SingleEntity();

ExtraBrandingConfiguration.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBrandingConfiguration
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory ? 'true' : 'false',
    included: this.included ? 'true' : 'false',
    payagency: this.payagency ? 'true' : 'false',
    payowner: this.payowner ? 'true' : 'false',
    visibletoowner: this.visibletoowner ? 'true' : 'false',
    vatband: this.vatband.vatband,
    customerselectable: this.customerselectable ? 'true' : 'false',
    maximumquantity: this.maximumquantity,
    type: this.type,
  };
};

ExtraBrandingConfiguration.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBrandingConfiguration
    fromdate: this.fromdate,
    todate: this.todate,
    compulsory: this.compulsory,
    included: this.included,
    payagency: this.payagency,
    payowner: this.payowner,
    visibletoowner: this.visibletoowner,
    vatband: this.vatband,
    customerselectable: this.customerselectable,
    maximumquantity: this.maximumquantity,
    type: this.type,
  };
};

module.exports = ExtraBrandingConfiguration;
