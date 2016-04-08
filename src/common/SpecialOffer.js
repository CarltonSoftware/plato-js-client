var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');
var Currency = require('./Currency');
var Collection = require('./Collection');
var BookingPeriod = require('./BookingPeriod');
var HolidayPeriod = require('./HolidayPeriod');
var SpecialOfferPropertyBranding = require('./PropertyBranding');
var Promotion = require('./Promotion');
var SpecialOfferBranding = require('./SpecialOfferBranding');
var SpecialOfferSalesChannel = require('./SpecialOfferSalesChannel');
var SpecialOfferWebsiteSection = require('./SpecialOfferWebsiteSection');

function SpecialOffer(id) {
  this.path = this.createPath = 'specialoffer';
  this.id = id;
  this.pricingperiod = new PricingPeriod();
  this.currency = new Currency();
  this.bookingperiods = new Collection({
    object: BookingPeriod,
    path: 'bookingperiod',
    parent: this,
  });
  this.holidayperiods = new Collection({
    object: HolidayPeriod,
    path: 'holidayperiod',
    parent: this,
  });
  this.propertybrandings = new Collection({
    object: SpecialOfferPropertyBranding,
    path: 'propertybranding',
    parent: this,
  });
  this.promotions = new Collection({
    object: Promotion,
    path: 'promotion',
    parent: this,
  });
  this.saleschannels = new Collection({
    object: SpecialOfferSalesChannel,
    path: 'saleschannel',
    parent: this,
  });
  this.websitesections = new Collection({
    object: SpecialOfferWebsiteSection,
    path: 'websitesection',
    parent: this,
  });
  this.brandings = new Collection({
    object: SpecialOfferBranding,
    path: 'branding',
    parent: this,
  });
}

SpecialOffer.prototype = new SingleEntity();
SpecialOffer.prototype.toArray = function() {
  return {
    type: this.type,
    description: this.description,
    minimumholidaylength: this.minimumholidaylength,
    maximumholidaylength: this.maximumholidaylength,
    minimumoccupancy: this.minimumoccupancy,
    maximumoccupancy: this.maximumoccupancy,
    minimumdaysbeforeholiday: this.minimumdaysbeforeholiday,
    maximumdaysbeforeholiday: this.maximumdaysbeforeholiday,
    daysbeforeappliestowholeholiday: this.daysbeforeappliestowholeholiday,
    additional:  this.additional,
    advertise:  this.advertise,
    changedaystartfinishonly: this.changedaystartfinishonly,
    currencycode: this.currency.code,
    amount: this.amount,
    fixedprice: this.fixedprice,
    percentage: this.percentage,
    active: this.active,
    pricingperiod: this.pricingperiod.pricingperiod,
    perperiod: this.perperiod,
    applytopartysizepricing: this.applytopartysizepricing,
  };
};
