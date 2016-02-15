var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var PriceType = require('./PriceType');
var PriceOverride = require('./PriceOverride');
var SalesChannel = require('./SalesChannel');
var StaticCollection = require('./StaticCollection');

function PriceTypeBranding(brandingId, id) {
    this.path = 'pricetype/' + brandingId + '/branding';
    this.createPath = this.path;
    this.id = id;
    this.saleschannel = new SalesChannel();
    this.branding = new Branding();
    this.basepricetype = new PriceType();
    this.percentages = new StaticCollection({ object: PriceTypeBranding });
    this.overrides = new StaticCollection({ object: PriceOverride });
}
PriceTypeBranding.prototype = new SingleEntity();

PriceTypeBranding.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PriceTypeBranding
    brandingid: this.branding.id,
    saleschannelid: this.saleschannel.id,
    fromdate: this.fromdate,
    todate: this.todate,
    type: this.type,
    percentage: this.percentage,
    basepricetype: this.basepricetype.id
  };
};

PriceTypeBranding.prototype.toUpdateArray = function() {

  var ret = {
    //TODO: Add in the fields necessary to update a PriceTypeBranding
    branding: this.branding.id,
    saleschannel: this.saleschannel.id,
    fromdate: this.fromdate,
    todate: this.todate,
    type: this.type
  };

  if (this.type == 'Percentage') {
    ret.percentage = this.percentage;
    ret.pricetypebrandingfixedid = this.basepricetype.id;
  }

  return ret;
};

module.exports = PriceTypeBranding;
