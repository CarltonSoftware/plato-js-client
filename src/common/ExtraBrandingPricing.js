var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Currency = require('./Currency');

function ExtraBrandingPricing(extraId, brandingId, id) {
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing';
    this.createPath = this.path;
    this.id = id;
    this.currency = new Currency;
    this.dailyprices = new Collection({ object: Currency });
}
ExtraBrandingPricing.prototype = new SingleEntity();

ExtraBrandingPricing.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBrandingPricing
    pricingperiod: this.pricingperiod,
    propertypricing: this.propertypricing,
    fromdate: this.fromdate,
    todate: this.todate,
    currencycode: this.currency.code,
    pricingtype: this.pricingtype,
    perperiod: this.perperiod ? 'true' : 'false',
    peradult: this.peradult ? 'true' : 'false',
    perchild: this.perchild ? 'true' : 'false',
    perinfant: this.perinfant ? 'true' : 'false',
    basedon: this.basedon,
    ranges: this.ranges,
    price: this.price
  };
};

ExtraBrandingPricing.prototype.toUpdateArray = function() {

  if (this.pricingtype == 'Amount') {
    return {
      //pricingperiod: this.pricingperiod,  //The pricingperiod field cannot be updated
      //perperiod: this.perperiod, //The perperiod field cannot be updated
      propertypricing: this.propertypricing,
      fromdate: this.fromdate,
      todate: this.todate,
      currencycode: this.currency.code,
      pricingtype: this.pricingtype,
      price: this.price
    };
  } else if (this.pricingtype == 'Percentage') {
    return {
      //pricingperiod: this.pricingperiod,  //The pricingperiod field cannot be updated
      //perperiod: this.perperiod, //The perperiod field cannot be updated
      propertypricing: this.propertypricing,
      fromdate: this.fromdate,
      todate: this.todate,
      currencycode: this.currency.code,
      pricingtype: this.pricingtype,
      percentage: this.percentage,
      basedon: this.basedon,
    };
  } else if (this.pricingtype == 'Range') {
    return {
      //pricingperiod: this.pricingperiod,  //The pricingperiod field cannot be updated
      //perperiod: this.perperiod, //The perperiod field cannot be updated
      propertypricing: this.propertypricing,
      fromdate: this.fromdate,
      todate: this.todate,
      currencycode: this.currency.code,
      pricingtype: this.pricingtype,
      basedon: this.basedon,
    };
  }
};

module.exports = ExtraBrandingPricing;
