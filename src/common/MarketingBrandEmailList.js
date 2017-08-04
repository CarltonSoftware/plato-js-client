var SingleEntity = require('./SingleEntity');
var client = require('./platoJsClient').getInstance();

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

MarketingBrandEmailList.prototype.unsubscribe = function(customer) {
    return client.delete({path: this.getUpdatePath() + '/unsubscribe', params: {customerid: customer.id}});
};

module.exports = MarketingBrandEmailList;
