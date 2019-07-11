var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');

function PropertyCommission(id) {
  this.path = 'commission';
  this.createPath = 'commission';
  this.id = id;
  this.pricingperiod = new PricingPeriod();
}

PropertyCommission.prototype = new SingleEntity();
PropertyCommission.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    commissionpercentage: this.commissionpercentage,
    updateexistingbookings: this.updateexistingbookings,
    overrideuserset: this.overrideuserset,
    forceoverwrite: this.forceoverwrite,
    pricingperiodid: this.pricingperiod.id,
    updatefullyownerpaid: this.updatefullyownerpaid
  };
};

module.exports = PropertyCommission;