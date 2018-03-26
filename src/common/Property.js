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
var PropertyTabsUser = require('./PropertyTabsUser');
var PropertyAddress = require('./PropertyAddress');
var PropertyOwnerPaymentTerm = require('./PropertyOwnerPaymentTerm');
var PropertyCommission = require('./PropertyCommission');
var PropertyNote = require('./PropertyNote');
var NoteFilterCollection = require('./NoteFilterCollection');
var PropertyHousekeeping = require('./PropertyHousekeeping');
var InspectionType = require('./InspectionType');
var AvailableBreak = require('./AvailableBreak');
var Joi = require('joi');
var moment = require('moment');
var client = require('./platoJsClient').getInstance();

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
  this.tabsuser = new Collection({
    object: PropertyTabsUser,
    path: 'tabsuser',
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

Property.prototype.getSchema = function () {
  return {
    tabspropref: Joi.string().label('Property reference').max(6),
    name: Joi.string().label('Property name').min(1).max(40),
    namequalifier: Joi.string().allow('').label('Name qualifier').max(60),
    bedrooms: Joi.number(),
    sleeps: Joi.number(),
    maximumpets: Joi.number().label('Maximum pets'),
    telephonenumber: Joi.string().allow('').label('Telephone number'),
    address: this.address.validSchema()
  };
};

Property.prototype.validSchema = function () {
  return Joi.object().keys(this.getSchema());
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
    params.fromdate = fromdate;
  }
  if (todate) {
    params.todate = todate;
  }
  if (nights) {
    params.nights = nights;
  }

  p.toArray = function() {
    return params;
  };

  return p.fetch();
};

Property.prototype.updateAvailablebreaks = function() {
  return this.updatePromiseResult([this.path, this.id, 'availablebreaks'].join('/'), { force: true });
};



Property.prototype.getAvailableBreaksPrice = function(fromDate, days) {
  var prices = this.availablebreaks.filter(function(p) {
    return moment(fromDate).isSame(p.fromdate);
  });
  
  if (prices.length > 0) {
    var price = prices.filter(
      function(p) {
        return p.days === days;
      }
    );
    
    if (days <= 7) {
      if (price.length === 1) {
        return price.pop().price;
      }
    }

    if (days > 7) {
      var getPrice = function(prices, availablebreakprices, fromDate, days = 7) {
        var price = availablebreakprices.filter(
          function(p) {
            return p.days == days && moment(p.fromdate).isSame(fromDate);
          }
        );
        
        if (price.length === 1) {
          prices.push(price.shift().price);
        } else {
          prices.push(-1);
        }
      };
      
      var prices = [];
      var add = days % 7;
      var weeks = (days - add) / 7;

      if (days < 14) {
        add = days;
      } else if (add > 0) {
        add = add + 7;
      }
      
      var to = moment(fromDate).add(i * 7, 'd');
      for (var i = 0; i < weeks; i++) {
        to = moment(fromDate).add(i * 7, 'd');
        getPrice(prices, this.availablebreaks, to, 7);
      }

      if (to && add > 0) {
        getPrice(prices, this.availablebreaks, to, add);
      }

      if (prices.indexOf(-1) < 0) {
        var total = 0;
        prices.forEach(function(p) {
          total += p;
        });

        return total;
      } else {
        return 0;
      }
    }
    
    return 0;
  }
};

/**
 * To String Method
 */
Property.prototype.toString = function() {
  return this.name;
};

module.exports = Property;
