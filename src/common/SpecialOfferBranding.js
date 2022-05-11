var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');

function SpecialOfferBranding(id) {
  this.path = this.createPath = 'branding';
  this.id = id;
  this.branding = new Branding();
}

SpecialOfferBranding.prototype = new SingleEntity();
SpecialOfferBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    description: this.description,
    active: this.active,
    amount: this.amount,
  };
};

module.exports = SpecialOfferBranding;
