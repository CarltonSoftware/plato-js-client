var Entity = require('./Entity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var ExtraBranding = require('./ExtraBranding');
var Extra = require('./Extra');

function BrandingExtra(brandId, id) {
  this.path = 'branding/'+brandId+'/extra';
}

BrandingExtra.prototype = new Entity();

module.exports = BrandingExtra;
