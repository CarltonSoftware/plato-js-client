var SingleEntity = require('./SingleEntity');

function BookingSecurityDeposit(bookingId, id) {
  this.path = 'booking/' + bookingId + '/securitydeposit';
  this.createPath = 'booking/' + bookingId + '/securitydeposit';
  this.id = id;
}
BookingSecurityDeposit.prototype = new SingleEntity();
BookingSecurityDeposit.prototype.toCreateArray = function() {
  return {
    amount: this.amount,
    dueindate: this.dueindate,
    dueoutdate: this.dueoutdate,
    ownerchargecodeid: this.ownerchargecodeid,
    ownerchargeamount: this.ownerchargeamount
  };
};

module.exports = BookingSecurityDeposit;
