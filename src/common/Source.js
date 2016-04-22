var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var SourceCategory = require('./SourceCategory');
var SourceMarketingBrand = require('./SourceMarketingBrand');

function Source(id) {
  this.path = 'source';
  this.createPath = 'source';
  this.id = id;
  this.sourcecategory = new SourceCategory();
  this.marketingbrands = new Collection({
    object: SourceMarketingBrand,
    path: 'marketingbrand',
    parent: this
  });
}
Source.prototype = new SingleEntity();
Source.prototype.toArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory.sourcecategory
  };
};

module.exports = Source;
