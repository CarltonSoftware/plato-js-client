var SingleEntity = require('./SingleEntity');

function ExtraBranding(extraId, id) {
  this.path = 'extra/' + extraId + '/branding';
  this.createPath = 'extra/' + extraId + '/branding';
  this.id = id;
}
ExtraBranding.prototype = new SingleEntity();

ExtraBranding.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBranding
    brandingid: this.brandingid,
  };
};

ExtraBranding.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBranding
    brandingid: this.brandingid,
  };
};

module.exports = ExtraBranding;
