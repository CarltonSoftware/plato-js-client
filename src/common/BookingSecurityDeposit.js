var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var OwnerChargeCode = require('./OwnerChargeCode');

function BookingSecurityDeposit(bookingId, id) {
  this.path = 'booking/' + bookingId + '/securitydeposit';
  this.createPath = 'booking/' + bookingId + '/securitydeposit';
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
}
BookingSecurityDeposit.prototype = new SingleEntity();
BookingSecurityDeposit.prototype.toArray = function() {
  return {
    amount: this.amount,
    dueindate: this.dueindate,
    dueoutdate: this.dueoutdate,
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamount: this.ownerchargeamount
  };
};

BookingSecurityDeposit.prototype.validSchema = Joi.object().keys({
  amount: Joi.number().required(),
  dueindate: Joi.string().required().label('due in date'),
  dueoutdate: Joi.string().required().label('due out date'),
  ownerchargeamount: Joi.number().empty('').label('owner charge amount'),
  // ownerchargecode is required iff ownerchargeamount is specified
  ownerchargecode: Joi.object().when('ownerchargeamount', {
    is: Joi.number().required(),
    then: Joi.object().required(),
    otherwise: Joi.object().optional()
  }).label('owner charge code')
});


module.exports = BookingSecurityDeposit;
