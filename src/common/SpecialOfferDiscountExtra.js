var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferDiscountExtra(id) {
  this.path = 'discountextra';
  this.createPath = this.path;
  this.id = id;
}

SpecialOfferDiscountExtra.prototype = new SingleEntity();

SpecialOfferDiscountExtra.prototype.toArray = function() {
  var qwe = {};

  qwe.extraid = this.extraid;

  if(this.price){
    qwe.price = this.price;
  }

  return qwe; 
}

SpecialOfferDiscountExtra.prototype.validSchema = function() {
  return Joi.object().keys({
      extraid: Joi.string().required().label('extra id'),
      price: Joi.string().optional().label('Price'),
  });
};

module.exports = SpecialOfferDiscountExtra;

