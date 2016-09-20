var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var PaymentMethod = require('./PaymentMethod');
var Joi = require('joi');

function CustomerPayment(id) {
  this.path = 'payment';
  this.createPath = 'payment';
  this.id = id;

  this.currency = new Currency();
  this.method = new PaymentMethod();
}

CustomerPayment.prototype = new SingleEntity();
CustomerPayment.prototype.toCreateArray = function() {
  var array = {
    paymentdatetime: this.paymentdatetime,
    reference: this.reference,
    paymentmethodid: this.paymentmethodid,
    amount: this.amount,
    currencyid: this.currencyid,
    bookingid: this.bookingid,
    bookingamount: this.bookingamount,
    securitydepositamount: this.securitydepositamount
  };
  return array;
};

CustomerPayment.validSchema = Joi.object().keys({
  paymentdatetime: Joi.string().optional().label('payment date time'),
  reference: Joi.string().optional().allow('').label('reference'),
  paymentmethodid: Joi.number().required().label('paymentmethodid'),
  currencyid: Joi.number().required().label('currency'),
  bookingid: Joi.number().optional().label('booking id'),
  amount: Joi.number().required().label('amount'),
  bookingamount: Joi.number().optional().label('booking amount'),
  securitydepositamount: Joi.number().optional().label('security deposit amount')
}),

module.exports = CustomerPayment;
