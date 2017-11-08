var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');
var Booking = require('./Booking');
var PaymentMethod = require('./PaymentMethod');
var Currency = require('./Currency');
var Actor = require('./Actor');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var statusError = require('../error/statusError');
var badRequestError = require('../error/badRequestError');
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
  this.bookingpayments = [];
}

SagePayPayment.prototype = new SingleEntity();
SagePayPayment.prototype.toArray = function() {
  var arr = {
    customerid: this.customer.id,
    amount: this.amount,
    paymentmethodid: this.paymentmethod.id,
    currencyid: this.currency.id
  };

  if (this.contactdetailpostal) {
    arr.contactdetailpostalid = this.contactdetailpostal.id;
  }

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

/**
 * Add in CustomerPayment object if found.
 *
 * @param {object} entity JSON response from api
 */
SagePayPayment.prototype.mutateResponse = function(entity) {
  if (entity.payment) {
    var c = require('./CustomerPayment');
    this.payment = new c();
    this.payment.mutateEntity(entity.payment);
  }

  return this.mutateEntity(entity);
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

SagePayPayment.prototype.release = function() {
  return this.updatePromiseResult([this.getUpdatePath(), 'release'].join('/'), {});
};

SagePayPayment.prototype.addMissing = function(booking) {
  return this.updatePromiseResult([this.getUpdatePath(), 'missingtransaction'].join('/'), {
    bookingid: booking.id
  });
};

SagePayPayment.prototype.void = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'void'].join('/'), {});
};

SagePayPayment.prototype.abort = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'abort'].join('/'), {});
};

SagePayPayment.prototype.invalidate = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'invalidate'].join('/'), {});
};

SagePayPayment.prototype.refund = function(amount) {
  return this.createPromiseResult([this.getUpdatePath(), 'refund'].join('/'), { amount: amount });
};

SagePayPayment.prototype.repeat = function(bookingamount, securitydepositamount) {
  return this.createPromiseResult([this.getUpdatePath(), 'repeat'].join('/'), { 
    bookingamount: bookingamount,
    securitydepositamount: securitydepositamount
  });
};

SagePayPayment.prototype.detail = function() {
  return client.get([this.getUpdatePath(), 'detail'].join('/'));
};

module.exports = SagePayPayment;
