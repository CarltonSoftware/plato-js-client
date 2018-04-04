var Entity = require('./Entity');

function BrandingExtra(brandId) {
  this.path = 'branding/'+brandId+'/extra';
}

BrandingExtra.prototype = new Entity();

module.exports = BrandingExtra;
