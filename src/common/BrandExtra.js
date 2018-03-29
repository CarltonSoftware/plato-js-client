var Entity = require('./Entity');

function BrandExtra(brandId, id) {
  this.id = id;
  this.path = 'extra';
}

BrandExtra.prototype = new Entity();

module.exports = BrandExtra;
