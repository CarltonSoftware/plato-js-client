var SingleEntity = require('./SingleEntity');
var PriceTypeBranding = require('./PriceTypeBranding');

function PropertyBrandingPrice(propertyId, brandingId, id) {
    this.path = 'property/' + propertyId + '/branding/' + brandingId + '/price';
    this.createPath = this.path;
    this.id = id;
    this.pricetypebranding = new PriceTypeBranding();
}
PropertyBrandingPrice.prototype = new SingleEntity();

PropertyBrandingPrice.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyBrandingPrice
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    partysizefrom: this.partysizefrom,
    partysizeto: this.partysizeto,
    price: this.price,
    currencycode: this.currencycode,
    pricetypebranding: this.pricetypebranding,
  };
};

PropertyBrandingPrice.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PropertyBrandingPrice
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    partysizefrom: this.partysizefrom,
    partysizeto: this.partysizeto,
    price: this.price,
    currencycode: this.currencycode,
    pricetypebranding: this.pricetypebranding,
  };
};

PropertyBrandingPrice.prototype.getDayPrice = function(day) {
  if (day == 7) {

  } else {
    var dayPrice = this.pricetypebranding.percentages.find(function(percentage) {
      return percentage.pricetype.periods == day;
    });
  }

  return dayPrice[0];
}

module.exports = PropertyBrandingPrice;
