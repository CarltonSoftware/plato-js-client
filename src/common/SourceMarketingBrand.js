var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function SourceMarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = 'marketingbrand';
  this.id = id;
  this.marketingbrand = new EntityLink({
  	object: 'MarketingBrand'
  });
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
