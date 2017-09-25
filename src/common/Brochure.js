var SingleEntity = require('./SingleEntity');
var MarketingBrand = require('./MarketingBrand');
var Joi = require('joi');

function Brochure(id) {
  this.path = this.createPath = 'brochure';
  this.id = id;
  this.marketingbrand = new MarketingBrand();

  this.validSchema = function() {
    return {
      name: Joi.string().required().min(1).label('name').description('Brochure name'),
      marketingbrand: Joi.object().required().label('Marketing brand').description('The marketing brand this brochure represents'),
      year: Joi.number().required().label('Year').description('Year of publication'),
      availablefromdate: Joi.date().required().label('Available to order from'),
      orderfromdate: Joi.date().required().label('Able to order from'),
      ordertodate: Joi.date().required().label('Able to order to'),
      weight: Joi.number().required().label('Weight').description('Weight of brochure'),
      cost: Joi.number().required().label('Cost').description('Cost of brochure'),
      code: Joi.string().required().label('Brochure Code')
    };
  };
}

Brochure.prototype = new SingleEntity();
Brochure.prototype.toArray = function() {
  return {
    name: this.name,
    marketingbrandcode: this.marketingbrand.code,
    year: this.year,
    orderfromdate: this.orderfromdate,
    ordertodate: this.ordertodate,
    availablefromdate: this.availablefromdate,
    weight: this.weight,
    cost: this.cost,
    code: this.code
  };
};

module.exports = Brochure;
