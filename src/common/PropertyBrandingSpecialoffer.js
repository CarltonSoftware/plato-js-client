var StaticCollection = require('./StaticCollection');
var SpecialOffer = require('./SpecialOffer');

function PropertyBrandingSpecialoffer(propertyId, brandId, fromdate, todate) {
  this.path = '/property/' + propertyId + '/branding/' + brandId + '/specialoffer';
  this.params = {
    fromdate: fromdate,
    todate: todate
  };
  this.options = {
    object: SpecialOffer
  };
}

PropertyBrandingSpecialoffer.prototype = new StaticCollection();

module.exports = PropertyBrandingSpecialoffer;