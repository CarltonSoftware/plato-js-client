var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferDiscountedExtra(id) {
  this.path = 'discountedextra';
  this.createPath = this.path;
  this.id = id;
}

SpecialOfferDiscountedExtra.prototype = new SingleEntity();

SpecialOfferDiscountedExtra.prototype.toArray = function() {
  var qwe = {};

  qwe.extraid = this.extraid;

  if(this.percentagediscount) {
    qwe.percentagediscount = this.percentagediscount;
  }

  if(this.newprice) {
    qwe.newprice = this.newprice;
  }

  if(this.discountamount) {
    qwe.discountamount = this.discountamount;
  }

  return qwe; 
}

SpecialOfferDiscountedExtra.prototype.validSchema = function() {
  return Joi.object().keys({
      extraid: Joi.number().required().label('extra id'),
      percentagediscount: Joi.number().optional().allow("").label("percentage discount"),
      newprice: Joi.number().optional().allow("").label("new price"),
      discountamount: Joi.number().optional().allow("").label('discount amount'),
  });
};

module.exports = SpecialOfferDiscountedExtra;

