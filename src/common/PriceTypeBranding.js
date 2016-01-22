var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var PriceType = require('./PriceType');
var SalesChannel = require('./SalesChannel');

function PriceTypeBranding(brandingId, id) {
    this.path = 'pricetype/' + brandingId + '/branding';
    this.createPath = this.path;
    this.id = id;
    this.saleschannel = new SalesChannel();
    this.branding = new Branding();
    this.basepricetype = new PriceType();
}
PriceTypeBranding.prototype = new SingleEntity();

PriceTypeBranding.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PriceTypeBranding
    branding: this.branding,
    saleschannel: this.saleschannel,
    fromdate: this.fromdate,
    todate: this.todate,
    type: this.type,
    percentage: this.percentage,
    basepricetype: this.basepricetype
  };
};

PriceTypeBranding.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PriceTypeBranding
    branding: this.branding,
    saleschannel: this.saleschannel.id,
    fromdate: this.fromdate,
    todate: this.todate,
    type: this.type,
    percentage: this.percentage,
    pricetypebrandingfixedid: this.basepricetype.id
  };
};

module.exports = PriceTypeBranding;
