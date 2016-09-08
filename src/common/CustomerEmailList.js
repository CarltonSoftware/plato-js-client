var SingleEntity = require('./SingleEntity');
var MarketingBrandEmailList = require('./MarketingBrandEmailList');

function CustomerEmailList(id) {
  this.path = this.createPath = 'emaillist';
  this.id = id;
  this.marketingbrandemaillist = new MarketingBrandEmailList();
}

CustomerEmailList.prototype = new SingleEntity();
CustomerEmailList.prototype.toArray = function() {
  return {
    marketingbrandemaillistid: this.marketingbrandemaillist.id,
    unsubscribed: this.unsubscribed
  };
};

module.exports = CustomerEmailList;
