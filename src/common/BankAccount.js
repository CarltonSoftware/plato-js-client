var SingleEntity = require('./SingleEntity'),
  Joi = require('joi'),
  Address = require('./Address');

function BankAccount(id) {
  this.path = 'bankaccount';
  this.createPath = 'bankaccount';
  this.id = id;
  this.address = new Address();
}
BankAccount.prototype = new SingleEntity();
BankAccount.prototype.toArray = function() {
  var ba = {
    accountnumber: this.accountnumber,
    accountname: this.accountname,
    bankname: this.bankname,
    sortcode: this.sortcode,
    paymentreference: this.paymentreference,
    rollnumber: this.rollnumber
  };

  if (this.address.line1) {
    ba.address_line1 = this.address.line1;
    ba.address_line2 = this.address.line2;
    ba.address_line3 = this.address.line3;
    ba.address_town = this.address.town;
    ba.address_county = this.address.county;
    ba.address_postcode = this.address.postcode;
    ba.address_countryalpha2code = this.address.country.alpha2;
    ba.address_latitude = this.address.latitude;
    ba.address_longitude = this.address.longitude;
  }

  if (this.currency && this.currency.id) {
    ba.currencyid = this.currency.id;
  }

  return ba;
};

BankAccount.prototype.validSchema = function() {
  return Joi.object().keys({
    accountname: Joi.string().empty('').max(40).label('Account Name'),
    accountnumber: Joi.string().required().min(6).max(10).label('Account Number'),
    sortcode: Joi.string().required().length(6).label('Sort Code'),
    bankname: Joi.string().empty('').max(30).label('Bank Name'),
    paymentreference: Joi.string().allow('').optional().max(18).label('Payment reference'),
    rollnumber: Joi.string().allow('').optional().max(18).label('Roll Number'),
    address: Joi.object().optional(),
    currency: Joi.object().optional()
  });
};

module.exports = BankAccount;
