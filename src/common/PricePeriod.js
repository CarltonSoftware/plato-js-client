var SingleEntity = require('./SingleEntity');
var PriceTypeBranding = require('./PriceTypeBranding');
var Collection = require('./Collection');
var ReducedOccupancyPrice = require('./ReducedOccupancyPrice');
var EntityLink = require('./EntityLink');
var PropertyBrandingYearPriceband = require('./PropertyBrandingYearPriceband');

/**
 * Property branding price period for fixed price object
 * 
 */

function PricePeriod(id) {
    this.path = 'priceperiod';
    this.createPath = this.path;
    this.id = id;
    
  this.pricetypebranding = new PriceTypeBranding();
  this.partysizeprices = new Collection({ object: ReducedOccupancyPrice, parent: this });
  this.propertybranding = new EntityLink({
    entity: 'PropertyBranding'
  });

  this.yearpriceband = new PropertyBrandingYearPriceband();

    // Override the mutate function to set the parent on pricetypebranding element
  // This will make sure the path is correct
  this.pricetypebranding.mutateResponse = function(obj) {
    var ele = this.mutateEntity(obj);
    ele.parent = ele.pricetype;
    return ele;
  };
}

PricePeriod.prototype = new SingleEntity();
PricePeriod.prototype.toArray = function() {
  return {
    level: this.level, // Agency, Branding or PropertyBranding 
    fromdate: this.fromdate,
    todate: this.todate,
    propertybrandingid: this.propertybranding.id,
    pricetypebrandingfixedid: this.pricetypebranding.id,
    pricebandid: this.priceband && this.priceband.id,
  };
};

module.exports = PricePeriod;