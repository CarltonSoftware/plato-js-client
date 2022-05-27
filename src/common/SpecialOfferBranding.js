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

SpecialOfferBranding.prototype.toCreateArray = function() {
  // don't send the amount if it isn't set as the API misinterprets this as zero
  if (this.amount) {
    return this.toArray();
  }

  return {
    brandingid: this.branding.id,
    description: this.description,
    active: this.active,
  };
};

module.exports = SpecialOfferBranding;
