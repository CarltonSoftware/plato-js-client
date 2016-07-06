var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var EntityLink = require('./EntityLink');

function PriceOverride(id) {
  this.path = 'price';
  this.createPath = 'price';
  this.id = id;
  this.currency = new Currency();
  this.pricetypebranding = new EntityLink({
    entity: 'PriceTypeBranding'
  });
}
PriceOverride.prototype = new SingleEntity();

PriceOverride.prototype.toArray = function() {
  return {
    type: 'Override',
    fromdate: this.fromdate,
    todate: this.todate,
    price: this.price,
    band: this.band,
    description: this.description,
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id
  };
};

module.exports = PriceOverride;
