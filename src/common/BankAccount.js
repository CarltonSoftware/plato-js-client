var SingleEntity = require('./SingleEntity'),
  Address = require('./Address');

function BankAccount(id) {
  this.path = 'bankaccount';
  this.createPath = 'bankaccount';
  this.id = id;
  this.address = new Address();
}
BankAccount.prototype = new SingleEntity();
BankAccount.prototype.toArray = function() {
  return {
    accountnumber: this.accountnumber,
    accountname: this.accountname,
    bankname: this.bankname,
    sortcode: this.sortcode,
    paymentreference: this.paymentreference,
    rollnumber: this.rollnumber,
    address_line1: this.address.line1,
    address_line2: this.address.line2,
    address_line3: this.address.line3,
    address_town: this.address.town,
    address_county: this.address.county,
    address_postcode: this.address.postcode,
    address_countryalpha2code: this.address.country.alpha2
  };
};

module.exports = BankAccount;
