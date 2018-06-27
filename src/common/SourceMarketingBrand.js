var SingleEntity = require('./SingleEntity');
var MarketingBrand = require('./MarketingBrand');

function SourceMarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = 'marketingbrand';
  this.id = id;
  this.marketingbrand = new MarketingBrand();
}
SourceMarketingBrand.prototype = new SingleEntity();
SourceMarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandcode: this.marketingbrand.code,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = SourceMarketingBrand;
