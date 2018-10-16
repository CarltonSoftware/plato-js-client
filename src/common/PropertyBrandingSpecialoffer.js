var StaticCollection = require('./StaticCollection');
var SpecialOffer = require('./SpecialOffer');

function PropertyBrandingSpecialoffer(propertyId, brandId, fromdate, todate, bookingdate, templatetypeid) {
  this.path = '/property/' + propertyId + '/branding/' + brandId + '/specialoffer';
  this.params = {
    fromdate: fromdate,
    todate: todate
  };
  if (bookingdate && templatetypeid) {
    this.params.bookingdate = bookingdate;
    this.params.templatetypeid = templatetypeid;
  }
  this.options = {
    object: SpecialOffer
  };
}

PropertyBrandingSpecialoffer.prototype = new StaticCollection();

module.exports = PropertyBrandingSpecialoffer;