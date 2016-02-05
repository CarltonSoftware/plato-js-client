var SingleEntity = require('./SingleEntity');

function PropertyBrandingPrice(id) {
    this.path = 'property';
    this.createPath = 'property';
    this.id = id;
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

module.exports = PropertyBrandingPrice;
