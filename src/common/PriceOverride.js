var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var ReducedOccupancyPrice = require('./ReducedOccupancyPrice');

function PriceOverride(id) {
  this.path = 'price';
  this.createPath = 'price';
  this.id = id;
  this.currency = new Currency();
  this.pricetypebranding = new EntityLink({
    entity: 'PriceTypeBranding'
  });
  this.partysizeprices = new Collection({
    object: ReducedOccupancyPrice,
    path: 'reducedoccupancyprice',
    parent: this
  });
}
PriceOverride.prototype = new SingleEntity();

PriceOverride.prototype.toArray = function() {
  return {
    type: 'Override',
    fromdate: this.fromdate,
    todate: this.todate,
    price: this.price,
    overridepricetype: this.overridepricetype,
    band: this.band,
    description: this.description,
    currencycode: this.currency.code,
    pricetypebrandingid: this.pricetypebranding.id,
    updateallbrands: this.updateallbrands,
    updatematchingbands: this.updatematchingbands
  };
};

module.exports = PriceOverride;
