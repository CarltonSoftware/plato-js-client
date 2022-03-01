var Collection = require('./Collection');
var ExtendedExtra = require('./ExtendedExtra');

function BrandingExtendedExtra(brandId) {
  this.path = 'branding/' + brandId + '/extendedextra';
  this.options.path = this.path;
  this.options.object = ExtendedExtra;
}

BrandingExtendedExtra.prototype = new Collection();

module.exports = BrandingExtendedExtra;
