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
  var f = {
    pricebandid: this.priceband.id,
    price: this.price
  };
  if (this.saleschannel) {
    f.saleschannelid = this.saleschannel.id
  }
  if (this.pricetype) {
    f.pricetypeid = this.pricetype.id
  }
  if (this.currency) {
    f.currencyid = this.currency.id
  }
  return f;
};

PropertyBrandingYearPriceband.prototype.validSchema = function() {
  return Joi.object().keys({
    priceband: Joi.object().label('Price band'),
    price: Joi.number().required().label('price'),
    saleschannel: Joi.object().optional().label('sales channel'),
    pricetype: Joi.object().optional().label('pricetype'),
    currency: Joi.object().optional().label('currency')
  });
};

PropertyBrandingYearPriceband.prototype.toString = function() {
  return this.priceband.toString();
};

module.exports = PropertyBrandingYearPriceband;