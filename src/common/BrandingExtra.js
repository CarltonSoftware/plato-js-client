var Entity = require('./Entity');

function BrandingExtra(brandId, id) {
  this.id = id;
  this.path = 'branding/'+brandId+'/extra';
}

BrandingExtra.prototype = new Entity();

module.exports = BrandingExtra;
