var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var PropertyNote = require('./PropertyNote');
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

function Property(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.notes = new Collection({object: PropertyNote});
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

  this.address = new PropertyAddress(id);
}
Property.prototype = new SingleEntity();
Property.prototype.toArray = function() {
  return {
    id: this.id,
    name: this.name,
    namequalifier: this.namequalifier,
    bedrooms: this.bedrooms,
    sleeps: this.sleeps,
    maximumpets: this.maximumpets,
    accomodationdescription: this.accomodationdescription,
    tabspropref: this.tabspropref,
    status: this.status ? this.status.status : null,
    checkinearliesttime: this.checkinearliesttime,
    checkinlatesttime: this.checkinlatesttime,
    checkouttime: this.checkouttime,
    telephonenumber: this.telephonenumber,
    address_line1: this.address.line1,
    address_line2: this.address.line2,
    address_line3: this.address.line3,
    address_town: this.address.town,
    address_county: this.address.county,
    address_postcode: this.address.postcode,
    address_countryalpha2code: this.address.country.alpha2,
    address_latitude: this.address.latitude,
    address_longitude: this.address.longitude,
  };
};

module.exports = Property;
