var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var MarketingBrand = require('./MarketingBrand');
var CustomerSource = require('./CustomerSource');
var CustomerEmailList = require('./CustomerEmailList');

function CustomerMarketingBrand(id) {
  this.path = this.createPath = 'marketingbrand';
  this.id = id;

  this.marketingbrand = new MarketingBrand();
  this.firstcustomersource = new CustomerSource();

  this.sources = new Collection({
    object: CustomerSource,
    path: 'source',
    parent: this
  });
  this.emaillists = new Collection({
    object: CustomerEmailList,
    path: 'emaillist',
    parent: this
  });
}

CustomerMarketingBrand.prototype = new SingleEntity();
CustomerMarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandid: this.marketingbrand.id,
    nocontact: this.nocontact,
    firstcustomersourceid: this.firstcustomersource.id
  };
};

module.exports = CustomerMarketingBrand;
