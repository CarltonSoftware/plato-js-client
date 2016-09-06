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
    sourceid: this.source.id,
    sourcedate: this.sourcedate
  };
};

module.exports = CustomerEmailList;
