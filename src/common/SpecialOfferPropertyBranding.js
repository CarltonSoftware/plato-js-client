var SingleEntity = require('./SingleEntity');

function SpecialOfferPropertyBranding(id) {
  var PropertyBranding = require('./PropertyBranding');
  this.path = this.createPath = 'property';
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
