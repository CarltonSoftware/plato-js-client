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
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function SpecialOffer(id) {
  this.path = this.createPath = 'specialoffer';
  this.id = id;
  this.pricingperiod = new PricingPeriod();
  this.currency = new Currency();
  this.bookingperiods = new Collection({
    object: BookingPeriod,
    path: 'bookingperiod',
    parent: this
  });
  this.holidayperiods = new Collection({
    object: HolidayPeriod,
    path: 'holidayperiod',
    parent: this
  });
  this.propertybrandings = new Collection({
    object: SpecialOfferPropertyBranding,
    path: 'propertybranding',
    parent: this
  });
  this.promotions = new Collection({
    object: Promotion,
    path: 'promotion',
    parent: this
  });
  this.saleschannels = new Collection({
    object: SpecialOfferSalesChannel,
    path: 'saleschannel',
    parent: this
  });
  this.websitesections = new Collection({
    object: SpecialOfferWebsiteSection,
    path: 'websitesection',
    parent: this
  });
  this.brandings = new Collection({
    object: SpecialOfferBranding,
    path: 'branding',
    parent: this
  });
  this.pricetype = new EntityLink({
    entity: 'PriceType'
  });
  this.forpricetype = new EntityLink({
    entity: 'PriceType'
  });
}

SpecialOffer.prototype = new SingleEntity();
SpecialOffer.prototype.toUpdateArray = function() {
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
    perperiod: this.perperiod,
    applytopartysizepricing: this.applytopartysizepricing,
    pricetypeid: this.pricetype.id,
    forpricetypeid: this.forpricetype.id
  };
};

SpecialOffer.prototype.toCreateArray = function() {
  var array = this.toUpdateArray();
  array.pricingperiod = this.pricingperiod.pricingperiod;
  return array;
};

SpecialOffer.prototype.validSchema = function() {
  return Joi.object().keys({
    description: Joi.string(),
    type: Joi.string(),
    amount: Joi.number(),
    fixedprice: Joi.number(),
    percentage: Joi.number(),
    active: Joi.boolean(),
    additional: Joi.boolean(),
    advertise: Joi.boolean(),
    minimumholidaylength: Joi.number().empty(''),
    maximumholidaylength: Joi.number().empty(''),
    minimumoccupancy: Joi.number().empty(''),
    maximumoccupancy: Joi.number().empty(''),
    minimumdaysbeforeholiday: Joi.number().empty(''),
    maximumdaysbeforeholiday: Joi.number().empty(''),
    daysbeforeappliestowholeholiday: Joi.boolean(),
    pricingperiod: Joi.object(),
    changedaystartfinishonly: Joi.boolean(),
    currency: Joi.object(),
    perperiod: Joi.boolean(),
    applytopartysizepricing: Joi.boolean(),
    pricetype: Joi.object(),
    forpricetype: Joi.object()
  });
};
module.exports = SpecialOffer;
