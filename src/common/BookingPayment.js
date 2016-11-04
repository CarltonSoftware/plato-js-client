var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function BookingPayment(id) {
  this.path = 'payment';
  this.createPath = 'payment';
  this.id = id;

  this.actor = new EntityLink({ entity: 'Actor' });
}

BookingPayment.prototype = new SingleEntity();
BookingPayment.prototype.toCreateArray = function() {
  var array = {
    type: this.type,
    paymentdatetime: this.paymentdatetime,
    amount: this.amount
  };
  if (this.type != 'Swap' && this.type != 'Transfer') {
    array.actorid = this.actor.id
  }
  if (this.type == 'BookingAndSecurityDeposit') {
    array.bookingamount = this.bookingamount;
    array.securitydepositamount = this.securitydepositamoun;
  }
  return array;
};

BookingPayment.validSchema = Joi.object().keys({
  type: Joi.string().valid('Booking', 'SecurityDeposit', 'BookingAndSecurityDeposit', 'Swap', 'Transfer').label('payment type'),
  paymentdatetime: Joi.string().optional().label('payment date time'),
  amount: Joi.number().required().label('amount'),
  bookingamount: Joi.when('type', { is: 'BookingAndSecurityDeposit',then: Joi.number().required().label('booking amount'), otherwise: Joi.forbidden() }),
  securitydepositamount: Joi.when('type', { is: 'BookingAndSecurityDeposit',then: Joi.number().required().label('sd amount'), otherwise: Joi.forbidden() }),
  actor: Joi.when('type', { is: 'Booking', then: Joi.object().required().label('actor') }),
  actor: Joi.when('type', { is: 'SecurityDeposit', then: Joi.object().required().label('actor') }),
  actor: Joi.when('type', { is: 'BookingAndSecurityDeposit', then: Joi.object().required().label('actor') })
}),

module.exports = BookingPayment;
