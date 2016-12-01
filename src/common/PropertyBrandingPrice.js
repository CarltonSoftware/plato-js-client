var SingleEntity = require('./SingleEntity');
var PriceTypeBranding = require('./PriceTypeBranding');
var Currency = require('./Currency');
var Collection = require('./Collection');
var PartySizePrice = require('./PartySizePrice');
var moment = require('moment');

/**
 * Property branding price object
 *
 * @param {number} id
 */
function PropertyBrandingPrice(id) {
  this.path = 'price';
  this.createPath = this.path;
  this.id = id;

  this.currency = new Currency();
  this.pricetypebranding = new PriceTypeBranding();
  this.partysizeprices = new Collection({
    path: 'partysizeprice',
    object: PartySizePrice,
    parent: this
  });

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
    band: this.band,
    description: this.description,
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id,
  };
};

PropertyBrandingPrice.prototype.getDayPrice = function(day, date) {
  var dayPrice = [];
  var price = '-';

  if (day < 7) {
    dayPrice = this.pricetypebranding.percentages.find(function(percentage) {
      return percentage.pricetype.periods == day;
    });
  }

  if (dayPrice.length) {
    price = dayPrice[0].price;
    if (dayPrice[0].overrides.collection.length) {
      var overridePrice = dayPrice[0].overrides.find(function(override) {
        return moment(date).isBetween(override.fromdate, override.todate, null, '[]');
      });
      if (overridePrice.length) {
        price = Math.round( overridePrice[0].price * dayPrice[0].percentage / 100 );
      }
    }
  }

  return price;
};

module.exports = PropertyBrandingPrice;
