var SingleEntity = require('./SingleEntity');
var MarketingBrand = require('./MarketingBrand');

function Brochure(id) {
  this.path = this.createPath = 'brochure';
  this.id = id;
  this.marketingbrand = new MarketingBrand();
}

Brochure.prototype = new SingleEntity();
Brochure.prototype.toArray = function() {
  return {
    name: this.name,
    marketingbrandcode: this.marketingbrand.code,
    year: this.year,
    orderfromdate: this.orderfromdate,
    ordertodate: this.ordertodate,
    availablefromdate: this.availablefromdate,
    weight: this.weight,
    cost: this.cost
  };
};

module.exports = Brochure;
