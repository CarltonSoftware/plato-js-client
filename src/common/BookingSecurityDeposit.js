var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var OwnerChargeCode = require('./OwnerChargeCode');

function BookingSecurityDeposit(id) {
  this.path = this.createPath = 'securitydeposit';
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
}
BookingSecurityDeposit.prototype = new SingleEntity();
BookingSecurityDeposit.prototype.toArray = function() {
  var arr = {
    amount: this.amount,
    dueindate: this.dueindate,
    dueoutdate: this.dueoutdate,
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamount: this.ownerchargeamount,
    notrefunded: this.notrefunded,
    note: this.note,
    refundingpaymentmethodid: false,
    refundingpaymentbankaccountid: false
  };

  if (this.refundingpaymentmethod) {
    arr.refundingpaymentmethodid = this.refundingpaymentmethod.id;
  }

  if (this.refundingbankaccount) {
    arr.refundingbankaccountid = this.refundingbankaccount.id;
  }

  if (this.propertysecuritydeposit) {
    arr.propertysecuritydepositid = this.propertysecuritydeposit.id;
  }

  return arr;
};

BookingSecurityDeposit.prototype.validSchema = Joi.object().keys({
  amount: Joi.number().required(),
  dueindate: Joi.string().required().label('due in date'),
  dueoutdate: Joi.string().required().label('due out date'),
  ownerchargeamount: Joi.number().empty('').label('Owner Charge Amount'),
  // ownerchargecode is required if ownerchargeamount is specified
  ownerchargecode: Joi.object().when('ownerchargeamount', {
    is: Joi.number().required(),
    then: Joi.object().required(),
    otherwise: Joi.object().optional()
  }).label('Owner Charge Code'),
  notrefunded: Joi.boolean()
});


module.exports = BookingSecurityDeposit;
