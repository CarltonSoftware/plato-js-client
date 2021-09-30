var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var MarketingBrand = require('./MarketingBrand');
var BrandExtra = require('./BrandExtra');
var VatRegistrationPeriod = require('./VatRegistrationPeriod');
var BrandingLeadTimePeriod = require('./BrandingLeadTimePeriod');
var Collection = require('./Collection');
var Joi = require('joi');

function Branding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.brandinggroup = new EntityLink({ entity: 'BrandingGroup' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });
  this.marketingbrand = new MarketingBrand();
  this.lettingincomevatband = new EntityLink({ entity: 'VatBand' });
  this.bacsbankaccount = new EntityLink({ entity: 'BankAccount' });
  this.petextrabranding = new EntityLink({ entity: 'ExtraBranding' });
  this.extras = new Collection({
    object: BrandExtra,
    path: 'extra',
    parent: this
  });
  this.vatregistrationperiods = new Collection({
    object: VatRegistrationPeriod,
    path: 'vatregistrationperiod',
    parent: this
  });
  this.leadtimeperiods = new Collection({
    object: BrandingLeadTimePeriod,
    path: 'leadtimeperiod',
    parent: this
  });

  this.validSchema = function() {
    var s = {
      brandinggroup: Joi.object().required().label('Branding Group'),
      bookingbrand: Joi.object().required().label('Booking Brand'),
      marketingbrand: Joi.object().required().label('Marketing Brand'),
      lettingincomevatband: Joi.object().required().label('Vat Band'),
      bacsoutputtype: Joi.any().optional().allow([
        '',
        'BARCLAYS',
        'CLYDESDALE',
        'CoOPAUTO',
        'BACS18',
        'BACS18SMALL',
        'LLOYDS',
        'NatwestAUTO2',
        'NatwestBankline',
        'Yorkshire'
      ]).label('BACS Output Type'),
      bacsbankaccount: Joi.object().optional().label('BACS Bank Account'),
      sunRef: Joi.string().optional().allow('').label('Sun Ref'),
      faxPayUserNumber: Joi.string().optional().allow('').label('Fax Pay User Number'),
      allowbookingonwebuntil: Joi.date().required().label('Allow booking on web until'),
      showpricingonwebuntil: Joi.date().required().label('Show pricing on web until'),
      updatepropertybrandings: Joi.boolean().label('Update property brandings with the dates above'),
      lettingbranding: Joi.boolean().label('Letting branding?'),
      bookingdatesarechangedays: Joi.boolean().label('Booking dates are change days?'),
      inactive: Joi.boolean().label('Make branding inactive?').description('This will hide it from dropdowns in tabs.'),
      prioritymarketing: Joi.boolean().label('Priority Marketing?')
    };

    if (this.id) {
      s.petextrabranding = Joi.object().optional().label('Pet Extra Branding');
    }

    return s;
  };
}

Branding.prototype = new SingleEntity();
Branding.prototype.toString = function(sep) {
  if (!sep) {
    sep = ' / ';
  }
  var grp = [
    this.brandinggroup.name,
    this.bookingbrand.name,
    this.marketingbrand.name
  ];
  return grp.join(sep);
};

Branding.prototype.mutateResponse = function(entity) {
  if (entity.bacssettings && entity.bacssettings.length) {
    var tmp = JSON.parse(entity.bacssettings);
    this.sunRef = tmp.sunRef;
    this.faxPayUserNumber = tmp.faxPayUserNumber;
  }

  return this.mutateEntity(entity);
};

Branding.prototype.toArray = function() {
  var fields = {
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id,
    lettingincomevatbandid: this.lettingincomevatband.id,
    bacsoutputtype: this.bacsoutputtype,
    petextrabrandingid: this.petextrabranding.id,
    allowbookingonwebuntil: this.allowbookingonwebuntil,
    showpricingonwebuntil: this.showpricingonwebuntil,
    lettingbranding: this.lettingbranding || false,
    bookingdatesarechangedays: this.bookingdatesarechangedays || false,
    inactive: this.inactive || false,
    prioritymarketing: this.prioritymarketing || false
  };

  var bacsSettings = {};
  if (this.sunRef) {
    bacsSettings.sunRef = this.sunRef;
  }

  if (this.faxPayUserNumber) {
    bacsSettings.faxPayUserNumber = this.faxPayUserNumber;
  }

  fields.bacssettings = JSON.stringify(bacsSettings);

  if (this.updatepropertybrandings) {
    fields.updatepropertybrandings = true;
  }

  if(this.bacsbankaccount) {
    fields.bacsbankaccountid = this.bacsbankaccount.id;
  }

  return fields;
};

module.exports = Branding;
