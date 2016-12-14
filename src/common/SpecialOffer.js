var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');
var Currency = require('./Currency');
var Collection = require('./Collection');
var SpecialOfferPropertyBranding = require('./SpecialOfferPropertyBranding');
var Promotion = require('./Promotion');
var SpecialOfferBranding = require('./SpecialOfferBranding');
var SpecialOfferSalesChannel = require('./SpecialOfferSalesChannel');
var SpecialOfferWebsiteSection = require('./SpecialOfferWebsiteSection');
var SpecialOfferHolidayPeriod = require('./SpecialOfferHolidayPeriod');
var SpecialOfferBookingPeriod = require('./SpecialOfferBookingPeriod');
var SpecialOfferAttribute = require('./SpecialOfferAttribute');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function SpecialOffer(id) {
  this.path = this.createPath = 'specialoffer';
  this.id = id;
  this.pricingperiod = new PricingPeriod();
  this.currency = new Currency();
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
  this.bookingperiods = new Collection({
    object: SpecialOfferBookingPeriod,
    path: 'bookingperiod',
    parent: this
  });
  this.holidayperiods = new Collection({
    object: SpecialOfferHolidayPeriod,
    path: 'holidayperiod',
    parent: this
  });
  this.brandings = new Collection({
    object: SpecialOfferBranding,
    path: 'branding',
    parent: this
  });
  this.attributes = new Collection({
    object: SpecialOfferAttribute,
    path: 'attribute',
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
    officedescription: this.officedescription,
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
  /* remove active as the API rejects on create, even if false */
  delete array.active;
  return array;
};

SpecialOffer.prototype.validSchema = function() {
  return Joi.object().keys({
    description: Joi.string(),
    officedescription: Joi.string().optional().allow('').label('Office description'),
    type: Joi.string(),
    amount: Joi.number(),
    fixedprice: Joi.number().label('Fixed price'),
    percentage: Joi.number(),
    active: Joi.boolean(),
    additional: Joi.boolean(),
    advertise: Joi.boolean(),
    minimumholidaylength: Joi.number().empty('').label('Minimum holiday length'),
    maximumholidaylength: Joi.number().empty('').label('Maximum holiday length'),
    minimumoccupancy: Joi.number().empty('').label('Minimum occupancy'),
    maximumoccupancy: Joi.number().empty('').label('Maximum occupancy'),
    minimumdaysbeforeholiday: Joi.number().empty('').label('Minimum days before holiday'),
    maximumdaysbeforeholiday: Joi.number().empty('').label('Maximum days before holiday'),
    daysbeforeappliestowholeholiday: Joi.boolean().label('Days before applies to whole holiday'),
    pricingperiod: Joi.object().label('Pricing period'),
    changedaystartfinishonly: Joi.boolean().label('Only apply to periods of holiday which start and finish on a changeover day'),
    currency: Joi.object(),
    perperiod: Joi.boolean().label('Per period'),
    applytopartysizepricing: Joi.boolean().label('Apply to party size pricing'),
    pricetype: Joi.object(),
    forpricetype: Joi.object()
  });
};
module.exports = SpecialOffer;
