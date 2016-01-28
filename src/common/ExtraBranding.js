var SingleEntity = require('./SingleEntity');

function ExtraBranding(id) {
    this.path = 'extra';
    this.createPath = 'extra';
    this.id = id;
}
ExtraBranding.prototype = new SingleEntity();

ExtraBranding.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBranding
    branding: this.branding,
  };
};

ExtraBranding.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBranding
    branding: this.branding,
  };
};

module.exports = ExtraBranding;
