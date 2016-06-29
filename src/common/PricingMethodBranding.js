var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');

function PricingMethodBranding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.branding = new Branding();
}

PricingMethodBranding.prototype = new SingleEntity();
PricingMethodBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = PricingMethodBranding;
