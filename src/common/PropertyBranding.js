var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Branding = require('./Branding');
var BrandingGroup = require('./BrandingGroup');
var PropertyBrandingPrice = require('./PropertyBrandingPrice');
var PartySizePricing = require('./PartySizePricing');
var PropertyBrandingChangeDayTemplate = require('./PropertyBrandingChangeDayTemplate');
var Status = require('./Status');
var Collection = require('./Collection');

function PropertyBranding(id) {
  this.path = 'branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new Branding();
  this.brandinggroup = new BrandingGroup();
  this.bookingbrand = new EntityLink({
    entity: 'PropertyBookingBrand',
    parent: new EntityLink({ entity: 'Property' })
  });
  this.marketingbrand = new EntityLink({
    entity: 'PropertyMarketingBrand',
    parent: new EntityLink({ entity: 'Property' })
  });
  this.partysizepricing = new Collection({
    object: PartySizePricing,
    path: 'partysizepricing',
    parent: this
  });
  this.status = new Status();

  this.prices = new Collection({
    object: PropertyBrandingPrice,
    path: 'price',
    parent: this
  });

  this.changedaytemplates = new Collection({
    object: PropertyBrandingChangeDayTemplate,
    path: 'changedaytemplate',
    parent: this
  });
}

PropertyBranding.prototype = new SingleEntity();

/**
 * This function will be called whenever this object is
 * pushed into the collection either by StaticCollection.push()
 * or by StaticCollection.mutateResponse()
 *
 * @param {object} parent
 */
PropertyBranding.prototype.setParent = function(parent) {
  this.parent = parent;
  this.bookingbrand.parent = parent;
  this.marketingbrand.parent = parent;
  this.partysizepricing.parent = parent;
};

PropertyBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    primarybookingbrand: this.primarybookingbrand,
    status: this.status.name,
    promote: this.promote
  };
};

module.exports = PropertyBranding;
