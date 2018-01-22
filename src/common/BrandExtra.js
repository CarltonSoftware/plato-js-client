var Entity = require('./Entity');
var Extra = require('./Extra');

function BrandExtra(brandId, id) {
  this.path = 'extra';
  this.extra = new Extra();
}

BrandExtra.prototype = new Entity();

module.exports = BrandExtra;
