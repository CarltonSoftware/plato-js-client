var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var PropertyBrandingPrice = require('./PropertyBrandingPrice');
var PartySizePricing = require('./PartySizePricing');
var AvailableDay = require('./AvailableDay');
var ExtraBranding = require('./ExtraBranding');
var PropertyBrandingChangeDayTemplate = require('./PropertyBrandingChangeDayTemplate');
var Status = require('./Status');
var Collection = require('./Collection');
var moment = require('moment');

function PropertyBranding(id) {
  this.path = 'branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.brandinggroup = new EntityLink({ entity: 'BrandingGroup' });
  this.bookingbrand = new EntityLink({
    entity: 'PropertyBookingBrand',
    parent: new EntityLink({ entity: 'Property' })
  });
  this.marketingbrand = new EntityLink({
    entity: 'PropertyMarketingBrand',
    parent: new EntityLink({ entity: 'Property' })
  });
  this.partysizepricing = new Collection({
    object: PartySizePricing,
    path: 'partysizepricing',
    parent: this
  });
  this.petextrabranding = new ExtraBranding();
  this.status = new Status();

  this.prices = new Collection({
    object: PropertyBrandingPrice,
    path: 'price',
    parent: this
  });

  this.availability = new Collection({
    object: AvailableDay,
    path: 'availability',
    parent: this
  });

  this.changedaytemplates = new Collection({
    object: PropertyBrandingChangeDayTemplate,
    path: 'changedaytemplate',
    parent: this
  });
}

PropertyBranding.prototype = new SingleEntity();

/**
 * This function will be called whenever this object is
 * pushed into the collection either by StaticCollection.push()
 * or by StaticCollection.mutateResponse()
 *
 * @param {object} parent
 */
PropertyBranding.prototype.setParent = function(parent) {
  this.parent = parent;
  this.bookingbrand.parent = parent;
  this.marketingbrand.parent = parent;
  this.partysizepricing.parent = parent;
};

PropertyBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    primarybranding: this.primarybranding,
    status: this.status.name,
    statusreasonid: this.statusreason && this.statusreason.id,
    propertynoteid: this.propertynote && this.propertynote.id,
    allowbookingonwebuntildate: this.allowbookingonwebuntildate,
    showpricingonwebuntildate: this.showpricingonwebuntildate,
    petextrabrandingid: this.petextrabranding && this.petextrabranding.id
  };
};

/**
 * Get the prices
 *
 * @param {string} fromDate
 * @param {string} toDate
 * @param {string} type
 */
PropertyBranding.prototype.getPrices = function(fromDate, toDate, type = '') {
  var p = this.prices;

  if ((fromDate && toDate) || type) {
    var data = {};
    if (type) {
      data.type = type;
    }
    if (fromDate && toDate) {
      data.fromdate = fromDate;
      data.todate = toDate;
    }
    p.toArray = function() {
      return data;
    };
  }

  return p.fetch();
};

/**
 * Get the availability
 *
 * @param {string}  fromDate
 * @param {string}  toDate
 * @param {boolean} includechangedays
 */
PropertyBranding.prototype.getAvailability = function(fromDate, toDate, includechangedays, affiliateid) {
  var p = this.availability;

  var params = {};
  if (fromDate) {
    params.fromdate = fromDate;
  }
  if (toDate) {
    params.todate = toDate;
  }
  if (includechangedays === true) {
    params.includechangedays = 'true';
  }
  if (affiliateid) {
    params['affiliateid'] = affiliateid;
  }

  p.toArray = function() {
    return params;
  };

  return p.fetch();
};

PropertyBranding.prototype.getPropertyBookedRanges = function() {
  var pb = this;
  return new Promise(function(resolve, reject) {
    pb.getAvailability(moment().format('YYYY-MM-DD'), moment().add(2, 'year').format('YYYY-MM-DD')).then(function(collection) {
      var bookingPeriods = [],
        start = null,
        end = null;

      collection.forEach(function(a) {
        if (a.daysavailable === 0) {
          if (start === null) {
            start = a.date;
          }
          end = a.date;
        } else {
          if (start) {
            bookingPeriods.push({
              start: start,
              end: end
            });
          }

          start = null;
          end = null;
        }
      });

      resolve(bookingPeriods);
    }, function(err) {
      reject(err);
    });
  });
};

PropertyBranding.prototype.toString = function() {
  return this.branding.toString();
};

module.exports = PropertyBranding;
