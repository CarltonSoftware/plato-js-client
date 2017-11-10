var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var PropertyBranding = require('./PropertyBranding');
var PropertyDocument = require('./PropertyDocument');
var PropertyOwner = require('./PropertyOwner');
var PropertySupplier = require('./PropertySupplier');
var PropertyOffice = require('./PropertyOffice');
var PropertySecurityFeature = require('./PropertySecurityFeature');
var PropertyRoom = require('./PropertyRoom');
var PropertyTarget = require('./PropertyTarget');
var PropertyAddress = require('./PropertyAddress');
var PropertyOwnerPaymentTerm = require('./PropertyOwnerPaymentTerm');
var PropertyCommission = require('./PropertyCommission');
var PropertyNote = require('./PropertyNote');
var NoteFilterCollection = require('./NoteFilterCollection');
var PropertyHousekeeping = require('./PropertyHousekeeping');
var InspectionType = require('./InspectionType');
var AvailableBreak = require('./AvailableBreak');
var Joi = require('joi');

function Property(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;

  this.notes = new NoteFilterCollection({
    noteEntity: this,
    object: PropertyNote,
    path: 'propertynote'
  });
  this.documents = new Collection({
    object: PropertyDocument,
    path: 'document',
    parent: this
  });
  this.owners = new Collection({
    object: PropertyOwner,
    path: 'owner',
    parent: this
  });
  this.suppliers = new Collection({
    object: PropertySupplier,
    path: 'supplier',
    parent: this
  });
  this.offices = new Collection({
    object: PropertyOffice,
    path: 'office',
    parent: this
  });
  this.securityFeatures = new Collection({
    object: PropertySecurityFeature,
    path: 'securityfeature',
    parent: this
  });
  this.rooms = new Collection({
    object: PropertyRoom,
    path: 'room',
    parent: this
  });
  this.targets = new Collection({
    object: PropertyTarget,
    path: 'target',
    parent: this
  });
  this.brandings = new Collection({
    object: PropertyBranding,
    path: 'branding',
    parent: this
  });
  this.ownerpaymentterms = new Collection({
    object: PropertyOwnerPaymentTerm,
    path: 'ownerpaymentterms',
    parent: this
  });
  this.commission = new Collection({
    object: PropertyCommission,
    path: 'commission',
    parent: this
  });
  this.availablebreaks = new Collection({
    object: AvailableBreak,
    path: 'availablebreak',
    parent: this
  });

  this.ratinginspectiontype = new InspectionType();

  this.address = new PropertyAddress(id);
  this.housekeeping = new PropertyHousekeeping();
  this.primarypropertybranding = new PropertyBranding();
}
Property.prototype = new SingleEntity();
Property.prototype.toArray = function() {
  var prop = {
    id: this.id,
    name: this.name,
    namequalifier: this.namequalifier,
    bedrooms: this.bedrooms,
    sleeps: this.sleeps,
    maximumpets: this.maximumpets,
    accomodationdescription: this.accomodationdescription,
    tabspropref: this.tabspropref,
    status: this.status ? this.status.name : null,
    telephonenumber: this.telephonenumber,
    address_line1: this.address.line1,
    address_line2: this.address.line2,
    address_line3: this.address.line3,
    address_town: this.address.town,
    address_county: this.address.county,
    address_postcode: this.address.postcode,
    address_countryalpha2code: this.address.country.alpha2,
    address_latitude: this.address.latitude,
    address_longitude: this.address.longitude
  };
  if (this.checkintext) {
    prop.checkintext = this.checkintext;
  }
  if (this.checkouttext) {
    prop.checkouttext = this.checkouttext;
  }

  if (this.ratinginspectiontype && this.ratinginspectiontype.id) {
    prop.ratinginspectiontypeid = this.ratinginspectiontype.id;
  }

  return prop;
};

Property.prototype.validSchema = function () {
  return Joi.object().keys({
    tabspropref: Joi.string().label('Property reference'),
    name: Joi.string().label('Property name'),
    namequalifier: Joi.string().allow('').label('Name qualifier'),
    bedrooms: Joi.number(),
    sleeps: Joi.number(),
    maximumpets: Joi.number().label('Maximum pets'),
    telephonenumber: Joi.string().allow('').label('Telephone number'),
    address: this.address.validSchema()
  });
};

/**
 * Get the availability
 *
 * @param {string} fromdate
 * @param {string} todate
 * @param {string} nights
 */
Property.prototype.getAvailablebreaks = function(fromdate, todate, nights) {
  var p = this.availablebreaks;

  var params = {};
  if (fromdate) {
    params['fromdate'] = fromdate;
  }
  if (todate) {
    params['todate'] = todate;
  }
  if (nights) {
    params['nights'] = nights;
  }

  p.toArray = function() {
    return params;
  };

  return p.fetch();
};

/**
 * To String Method
 */
Property.prototype.toString = function() {
  return this.name;
};

module.exports = Property;
