var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var EntityLink = require('./EntityLink');

function PriceMinimum(id) {
  this.path = 'price';
  this.createPath = 'price';
  this.id = id;
  this.currency = new Currency();
  this.pricetypebranding = new EntityLink({
    entity: 'PriceTypeBranding'
  });
}
PriceMinimum.prototype = new SingleEntity();

PriceMinimum.prototype.toArray = function() {
  return {
    type: 'Minimum',
    fromdate: this.fromdate,
    todate: this.todate,
    price: this.price,
    band: this.band,
    description: this.description,
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id
  };
};

module.exports = PriceMinimum;
