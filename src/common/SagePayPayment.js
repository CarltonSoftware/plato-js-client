var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');
var Booking = require('./Booking');
var PaymentMethod = require('./PaymentMethod');
var Currency = require('./Currency');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var statusError = require('./../error/statusError');
var badRequestError = require('./../error/badRequestError');
var client = require('./platoJsClient').getInstance();

function SagePayPayment(id) {
  this.path = 'sagepaypayment';
  this.createPath = 'sagepaypayment';
  this.id = id;
  this.customer = new Customer();
  this.booking = new Booking();
  this.contactdetailpostal = new ActorContactDetailAddress();
  this.paymentmethod = new PaymentMethod();
  this.currency = new Currency();
}

SagePayPayment.prototype = new SingleEntity();
SagePayPayment.prototype.toArray = function() {
  var arr = {
    customerid: this.customer.id,
    amount: this.amount,
    contactdetailpostalid: this.contactdetailpostal.id,
    paymentmethodid: this.paymentmethod.id,
    currencyid: this.currency.id
  };

  if (this.booking.id) {
    arr.bookingid = this.booking.id;
  }

  if (this.bookingamount) {
    arr.bookingamount = this.bookingamount;
  }

  if (this.securitydepositamount) {
    arr.securitydepositamount = this.securitydepositamount;
  }

  return arr;
};

SagePayPayment.prototype.createIframe = function() {
	var result = client.post({ path: this.path, entity: this.toArray() });
  var e = this;
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 201) {
        e.iframe = res.entity;
        var newLocation = e.replacePath(res.headers['Content-Location']);
        client.get({ path: newLocation}).then(function(res) {
          resolve(e.mutateResponse(res.entity));
        }, function(res) {
          reject(new statusError(res));
        });
      } else {
        reject(new statusError(res));
      }
    });
  });
};

module.exports = SagePayPayment;
