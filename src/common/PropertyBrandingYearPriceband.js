var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PriceBand = require('./PriceBand');
var ReducedOccupancyPrice = require('./ReducedOccupancyPrice');
var Joi = require('joi');

function PropertyBrandingYearPriceband(propertyid, propertybrandingid, year, id) {
  this.path = 'property/' + propertyid + '/branding/' + propertybrandingid + '/year/' + year + '/priceband';
  this.createPath = this.path;
  this.id = id;
  this.priceband = new PriceBand();
  this.parent = this.parent;
  this.reducedoccupancyprices = new Collection({
    object: ReducedOccupancyPrice,
    path: 'reducedoccupancyprice',
    parent: this
  });
}

PropertyBrandingYearPriceband.prototype = new SingleEntity();

PropertyBrandingYearPriceband.prototype.toArray = function() {
  return {
    pricebandid: this.priceband.id,
    price: this.price
  };
};

PropertyBrandingYearPriceband.prototype.validSchema = function() {
  return Joi.object().keys({
    priceband: Joi.object().label('Price band'),
    price: Joi.number().required().label('price'),
  });
};

PropertyBrandingYearPriceband.prototype.toString = function() {
  return this.priceband.toString();
};

module.exports = PropertyBrandingYearPriceband;