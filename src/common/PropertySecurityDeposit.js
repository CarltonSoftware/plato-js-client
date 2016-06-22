var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertySecurityDeposit(propertyId, id) {
    this.path = 'property/' + propertyId + '/securitydeposit';
    this.createPath = this.path;
    this.id = id;
}
PropertySecurityDeposit.prototype = new SingleEntity();

PropertySecurityDeposit.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertySecurityDeposit
    bookedfromdate: this.bookedfromdate,
    bookedtodate: this.bookedtodate,
    holidayfromdate: this.holidayfromdate,
    holidaytodate: this.holidaytodate,
    amount: this.amount,
    currencycode: this.currency.code,
    daysdue: this.daysdue,
    refundable: this.refundable,
    perperson: this.perperson,
    perperiod: this.perperiod,
    pricingperiod: this.pricingperiod,
    minimumdays: this.minimumdays,
    maximumdays: this.maximumdays,
    comments: this.comments
  };
};

PropertySecurityDeposit.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PropertySecurityDeposit
    bookedfromdate: this.bookedfromdate,
    bookedtodate: this.bookedtodate,
    holidayfromdate: this.holidayfromdate,
    holidaytodate: this.holidaytodate,
    amount: this.amount,
    currencycode: this.currency.code,
    daysdue: this.daysdue,
    refundable: this.refundable,
    perperson: this.perperson,
    perperiod: this.perperiod,
    pricingperiod: this.pricingperiod,
    minimumdays: this.minimumdays,
    maximumdays: this.maximumdays,
    comments: this.comments
  };
};

PropertySecurityDeposit.prototype.validSchema = function() {
  return Joi.object().keys({
    //TODO: Setup validation rules
    bookedfromdate: Joi.date().required().label('Booked From Date'),
    bookedtodate: Joi.date().required().label('Booked To Date'),
    holidayfromdate: Joi.date().required().label('Holiday From Date'),
    holidaytodate: Joi.date().required().label('Holiday To Date'),
    amount: Joi.string().required().label('Amount'),
    currency: Joi.object().required().label('Currency'),
    daysduein: Joi.string().required().label('Days Due In'),
    daysdueout: Joi.string().required().label('Days Due Out'),
    refundable: Joi.boolean().required().label('Refundable'),
    perperson: Joi.boolean().required().label('Per Person'),
    perperiod: Joi.boolean().required().label('Per Period'),
    pricingperiod: Joi.string().required().label('Pricing Period'),
    minimumdays: Joi.string().required().label('Minimum Days'),
    maximumdays: Joi.string().required().label('Maximum Days'),
    comments: Joi.string().required().label('Comments')
  });
};

module.exports = PropertySecurityDeposit;
