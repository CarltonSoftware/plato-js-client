var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var PriceType = require('./PriceType');
var PriceOverride = require('./PriceOverride');
var PartySizePrice = require('./PartySizePrice');
var PriceMinimum = require('./PriceMinimum');
var SalesChannel = require('./SalesChannel');
var StaticCollection = require('./StaticCollection');

function PriceTypeBranding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.saleschannel = new SalesChannel();
  this.branding = new Branding();
  this.pricetype = new PriceType();
  // this.basepricetypebranding = new PriceTypeBranding();
  this.percentages = new StaticCollection({ object: PriceTypeBranding });
  this.overrides = new StaticCollection({ object: PriceOverride, parent: this });
  this.minimums = new StaticCollection({ object: PriceMinimum, parent: this });
  this.partysizeprices = new StaticCollection({ object: PartySizePrice, parent: this });
}
PriceTypeBranding.prototype = new SingleEntity();

PriceTypeBranding.prototype.toArray = function() {
  var ret = {
    brandingid: this.branding.id,
    saleschannelid: this.saleschannel.id,
    fromdate: this.fromdate,
    todate: this.todate,
    type: this.type,

    // Hardcode to 2 at the moment
    decimalplaces: 2
  };

  if (this.type === 'Percentage') {
    if (this.prorata) {
      ret.prorata = this.prorata;
    } else {
      ret.percentage = this.percentage;
    }
    ret.pricetypebrandingfixedid = this.basepricetypebranding.id;
  }

  return ret;
};

module.exports = PriceTypeBranding;
