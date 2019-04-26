var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferHolidayPeriod(id) {
  this.path = this.createPath = 'holidayperiod';
  this.id = id;
}

SpecialOfferHolidayPeriod.prototype = new SingleEntity();
SpecialOfferHolidayPeriod.prototype.toArray = function() {
  var objTR = {
    id: this.id,
    fromdate: this.fromdate,
    todate: this.todate,
    donotsplit: this.donotsplit
  };

  if(this.fixedprice) {
    objTR.fixedprice = this.fixedprice;
  }

  return objTR;
};

SpecialOfferHolidayPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required(),
    todate: Joi.string().required(),
    donotsplit: Joi.boolean().required()
  });
};

module.exports = SpecialOfferHolidayPeriod;
