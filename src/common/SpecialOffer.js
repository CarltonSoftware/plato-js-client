var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');
var Currency = require('./Currency');
var MultiOfferAction = require('./MultiOfferAction');
var Collection = require('./Collection');
var Promotion = require('./Promotion');
var SpecialOfferBranding = require('./SpecialOfferBranding');
var SpecialOfferMarketingBranding = require('./SpecialOfferMarketingBranding');
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
  this.multiofferaction = new MultiOfferAction();

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

  this.marketingbrandings = new Collection({
    object: SpecialOfferMarketingBranding,
    path: 'marketingbrand',
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
  this.priceband = new EntityLink({
    entity: 'PriceBand'
  });
  this.forpriceband = new EntityLink({
    entity: 'PriceBand'
  });
}

SpecialOffer.prototype = new SingleEntity();
SpecialOffer.prototype.toUpdateArray = function() {
  var fields = {
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
    forpricetypeid: this.forpricetype.id,
    pricebandid: this.priceband.id,
    forpricebandid: this.forpriceband.id,
    archive: this.archive,
    archiveddatetime: this.archiveddatetime,
  };

  if (this.percentagepaidbyowner === null) {
    fields.percentagepaidbyowner = 'null';
  } else {
    fields.percentagepaidbyowner = this.percentagepaidbyowner;
  }
  if (this.archivedbyactor) {
    fields.archivedbyactorid = this.archivedbyactor.id;
  }

  if (this.depositamount) {
    fields.depositamountid = this.depositamount.id;
  }

  if (this.specialoffertemplatetype) {
    fields.specialoffertemplatetypeid = this.specialoffertemplatetype.id;
  }

  if (this.useholidayperiodprices) {
    fields.useholidayperiodprices = this.useholidayperiodprices;
  } else if (this.useholidayperiodprices === false) {
    fields.useholidayperiodprices = this.useholidayperiodprices;
  }

  if (this.multiofferaction && this.multiofferaction.id) {
    fields.multiofferactionid = this.multiofferaction.id;
  }

  if (this.websitesectionids) {
    fields.websitesectionids = this.websitesectionids;
  }

  if (this.reducedoccupancyoffer) {
    fields.reducedoccupancyoffer = this.reducedoccupancyoffer;
  }

  return fields;
};

SpecialOffer.prototype.toCreateArray = function() {
  var array = this.toUpdateArray();
  array.pricingperiod = this.pricingperiod.pricingperiod;
  array.brandingids = this.brandingids;
  /* create from another template if required */
  if (this.createfromtemplateid && this.propertybrandingyearpricebandid) {
    array.createfromtemplateid = this.createfromtemplateid;
    array.propertybrandingyearpricebandid = this.propertybrandingyearpricebandid;
  }
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
    multiofferaction: Joi.object().required().label('Multiple Offer Action'),
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
    forpricetype: Joi.object(),
    priceband: Joi.object(),
    forpriceband: Joi.object(),
    archive: Joi.boolean(),
    archivedbyactorid: Joi.number().empty('').label('Archived by actor'),
    archiveddatetime: Joi.string().optional().allow('').label('Archived date'),
    brandingids: Joi.string().optional().allow('').label('Brandings'),
    depositamount: Joi.object().optional().label('Deposit Amount'),
    percentagepaidbyowner: Joi.number().min(0).max(100).allow(null).label('Percentage paid by owner'),
    specialoffertemplatetype: Joi.object().optional().label('Template Type'),
    useholidayperiodprices: Joi.boolean().optional().label('Use the prices indicated in the Holiday Periods'),
    reducedoccupancyoffer: Joi.boolean().optional().label('Reduced Occupancy Offer')
  });
};

SpecialOffer.prototype.toString = function() {
  return this.id + ' (' + this.description + ')';
}
module.exports = SpecialOffer;
