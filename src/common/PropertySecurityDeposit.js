var SingleEntity = require('./SingleEntity');

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
    comments: this.comments,
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
    comments: this.comments,
  };
};

module.exports = PropertySecurityDeposit;
