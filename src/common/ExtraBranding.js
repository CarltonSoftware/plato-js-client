var SingleEntity = require('./SingleEntity');
var ExtraBrandingConfiguration = require('./ExtraBrandingConfiguration');
var Collection = require('./Collection');
var Branding = require('./Branding');

function ExtraBranding(extraId,id) {
  this.path = 'extra/' + extraId + '/branding';
  this.createPath = 'extra/' + extraId + '/branding';
  this.id = id;

  this.branding = new Branding();
  this.brandingConfiguration = new Collection({
    object: ExtraBrandingConfiguration,
    path: 'configuration',
    parent: this
  });
}
ExtraBranding.prototype = new SingleEntity();

ExtraBranding.prototype.toCreateArray = function() {
  return {
    brandingid: this.brandingid,
  };
};

ExtraBranding.prototype.toUpdateArray = function() {
  return {
    brandingid: this.brandingid,
  };
};

module.exports = ExtraBranding;
