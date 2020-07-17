var SingleEntity = require('./SingleEntity');
var PriceTypeBranding = require('./PriceTypeBranding');
var Currency = require('./Currency');
var Collection = require('./Collection');
var ReducedOccupancyPrice = require('./ReducedOccupancyPrice');
var EntityLink = require('./EntityLink');
var moment = require('moment');
var PropertyBrandingYearPriceband = require('./PropertyBrandingYearPriceband');

/**
 * Property branding price object
 *
 * @param {number} id
 */
function PropertyBrandingPrice(id) {
  this.path = 'priceperiod';
  this.createPath = this.path;
  this.id = id;

  this.currency = new Currency();
  this.pricetypebranding = new PriceTypeBranding();
  this.partysizeprices = new Collection({ object: ReducedOccupancyPrice, parent: this });
  this.propertybranding = new EntityLink({
    entity: 'PropertyBranding'
  });

  this.yearpriceband = new PropertyBrandingYearPriceband();
  this.yearpriceband.parent = this.parent;

  // Override the mutate function to set the parent on pricetypebranding element
  // This will make sure the path is correct
  this.pricetypebranding.mutateResponse = function(obj) {
    var ele = this.mutateEntity(obj);
    ele.parent = ele.pricetype;
    return ele;
  };
}

PropertyBrandingPrice.prototype = new SingleEntity();
PropertyBrandingPrice.prototype.toArray = function() {
 
  return {
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    partysizefrom: this.partysizefrom,
    partysizeto: this.partysizeto,
    price: this.price,
    pricebandid: this.priceband && this.priceband.id,
    band: this.band,
    description: this.description,
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id,
    updateallbrands: this.updateallbrands,
    updatematchingbands: this.updatematchingbands
  };
};

PropertyBrandingPrice.prototype.getDayPrice = function(day, date) {
  var dayPrice;
  var price = '-';
  if (day < 7) {
    dayPrice = this.pricetypebranding.percentages.findOne(function(percentage) {
      return percentage.pricetype.periods == day;
    });
    if (dayPrice) {
      price = dayPrice.price;
      if (dayPrice.overrides.collection.length) {
        var overridePrice = dayPrice.overrides.findOne(function(override) {
          return moment(date).isBetween(override.fromdate, override.todate, null, '[)');
        });
        if (overridePrice) {
          price = overridePrice.price;
        }
      }
    }
  }

  return price;
};

module.exports = PropertyBrandingPrice;
