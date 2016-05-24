var SingleEntity = require('./SingleEntity');
var ExtraBrandingConfiguration = require('./SingleEntity');
var Collection = require('./Collection');

function ExtraBranding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;

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
