var SingleEntity = require('./SingleEntity');
var PriceTypeBranding = require('./PriceTypeBranding');
var Currency = require('./Currency');

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
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id,
  };
};

PropertyBrandingPrice.prototype.getDayPrice = function(day) {
  var dayPrice;

  if (day == 7) {

  } else {
    dayPrice = this.pricetypebranding.percentages.find(function(percentage) {
      return percentage.pricetype.periods == day;
    });
  }

  return dayPrice[0];
};

module.exports = PropertyBrandingPrice;
