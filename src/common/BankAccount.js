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
    rollnumber: this.rollnumber
  };
};

module.exports = BankAccount;
