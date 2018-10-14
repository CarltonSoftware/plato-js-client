var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferLeadTimePeriod(id) {
    this.path = 'leadtimeperiod';
    this.createPath = 'leadtimeperiod';
    this.id = id;
}
SpecialOfferLeadTimePeriod.prototype = new SingleEntity();

SpecialOfferLeadTimePeriod.prototype.toArray = function() {
  return {
    leaddaysfrom: this.leaddaysfrom,
    leaddaysto: this.leaddaysto,
    amount: this.amount
  };
};

SpecialOfferLeadTimePeriod.prototype.validSchema = function() {
    return Joi.object().keys({
        leaddaysfrom: Joi.number().required().label('Lead Days From'),
        leaddaysto: Joi.number().required().label('Lead Days To'),
        amount: Joi.string().required().label('Amount')
    });
  };

module.exports = SpecialOfferLeadTimePeriod;
