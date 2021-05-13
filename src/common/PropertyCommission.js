var SingleEntity = require('./SingleEntity');
var PricingPeriod = require('./PricingPeriod');
var Joi = require('joi');

function PropertyCommission(id) {
  this.path = 'commission';
  this.createPath = 'commission';
  this.id = id;
  this.pricingperiod = new PricingPeriod();

  this.validSchema = function() {
    return {
      fromdate: Joi.date().required().label('From date'),
      todate: Joi.date().required().label('To date'),
      pricingperiod: Joi.object().required().label('Pricing period'),
      commissionpercentage: Joi.number().required().label('Commission percentage'),
      updateexistingbookings: Joi.boolean().required().label('Update all bookings in this date range'),
      forceoverwrite: Joi.boolean().required().label('Overwrite existing commissions where dates overlap'),
      overrideuserset: Joi.boolean().required().label('Update all bookings in this date range - even if the booking commission has been updated'),
      updatefullyownerpaid: Joi.boolean().required().label('Update all bookings in this date range - even if the owner is fully paid')
    }
  }
}

PropertyCommission.prototype = new SingleEntity();
PropertyCommission.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    commissionpercentage: this.commissionpercentage,
    updateexistingbookings: this.updateexistingbookings,
    overrideuserset: this.overrideuserset,
    forceoverwrite: this.forceoverwrite,
    pricingperiodid: this.pricingperiod.id,
    updatefullyownerpaid: this.updatefullyownerpaid
  };
};

module.exports = PropertyCommission;