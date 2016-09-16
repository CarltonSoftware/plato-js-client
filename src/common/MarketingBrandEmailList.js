var SingleEntity = require('./SingleEntity');

function MarketingBrandEmailList(id) {
  this.path = this.createPath = 'emaillist';
  this.id = id;
}

MarketingBrandEmailList.prototype = new SingleEntity();
MarketingBrandEmailList.prototype.toArray = function() {
  return {
    listname: this.listname,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = MarketingBrandEmailList;
