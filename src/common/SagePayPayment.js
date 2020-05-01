var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');
var Booking = require('./Booking');
var Branding = require('./Branding');
var PaymentMethod = require('./PaymentMethod');
var Currency = require('./Currency');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var statusError = require('../error/statusError');
var client = require('./platoJsClient').getInstance();

function SagePayPayment(id) {
  this.path = 'sagepaypayment';
  this.createPath = 'sagepaypayment';
  this.id = id;
  this.customer = new Customer();
  this.booking = new Booking();
  this.branding = new Branding();
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

  if (this.branding.id) {
    arr.brandingid = this.branding.id;
  }

  if (this.bookingamount && this.booking.id) {
    arr.bookingamount = this.bookingamount;
  }

  if (this.securitydepositamount && this.booking.id) {
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

SagePayPayment.prototype.forcerelease = function() {
  return this.updatePromiseResult([this.getUpdatePath(), 'forcerelease'].join('/'), {});
};

SagePayPayment.prototype.addMissing = function(booking) {
  return this.updatePromiseResult([this.getUpdatePath(), 'missingtransaction'].join('/'), {
    bookingid: booking.id,
    bookingamount: this.bookingamount || 0,
    securitydepositamount: this.securitydepositamount || 0
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

SagePayPayment.prototype.refund = function(amount, expirydate) {
  obj = {
    amount: amount
  };
  if (expirydate) {
    obj.expirydate = expirydate;
  }
  return this.createPromiseResult([this.getUpdatePath(), 'refund'].join('/'), obj);
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
