var SingleEntity = require('./SingleEntity');
// var SourceMarketingBrand = require('./SourceMarketingBrand');

function BrochureRequest(id) {
  this.path = 'request';
  this.id = id;
  // this.sourcemarketingbrand = new SourceMarketingBrand;
}

BrochureRequest.prototype = new SingleEntity();
BrochureRequest.prototype.toArray = function() {
  return {
    customerid: this.customer.id,
    emailoptin: this.emailoptin,
    // sourcemarketingbrandid: this.sourcemarketingbrand.id,
    // tabsuserid: // optional
  };
};

module.exports = BrochureRequest;
