var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var PartySizePrice = require('./PartySizePrice');
var EntityLink = require('./EntityLink');
var StaticCollection = require('./StaticCollection');

function PriceOverride(id) {
  this.path = 'price';
  this.createPath = 'price';
  this.id = id;
  this.currency = new Currency();
  this.pricetypebranding = new EntityLink({
    entity: 'PriceTypeBranding'
  });
  this.partysizeprices = new StaticCollection({ object: PartySizePrice, parent: this });
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
    pricetypebrandingid: this.pricetypebranding.id,
    updateallbrands: this.updateallbrands,
    updatematchingbands: this.updatematchingbands
  };
};

module.exports = PriceOverride;
