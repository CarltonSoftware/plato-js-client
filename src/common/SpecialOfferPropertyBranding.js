var SingleEntity = require('./SingleEntity');
var PropertyBranding = require('./PropertyBranding');

function SpecialOfferPropertyBranding(id) {
  this.path = this.createPath = 'promotion';
  this.id = id;
  this.propertybranding = new PropertyBranding();
}

SpecialOfferPropertyBranding.prototype = new SingleEntity();
SpecialOfferPropertyBranding.prototype.toArray = function() {
  return {
    propertybrandingid: this.propertybranding.id,
    description: this.description,
  };
};

module.exports = SpecialOfferPropertyBranding;
