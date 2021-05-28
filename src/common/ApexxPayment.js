var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');
var Owner = require('./Owner');
var Booking = require('./Booking');
var Branding = require('./Branding');
var PaymentMethod = require('./PaymentMethod');
var Currency = require('./Currency');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var statusError = require('../error/statusError');
var client = require('./platoJsClient').getInstance();

function ApexxPayment(id) {
  this.path = 'apexxpayment';
  this.createPath = 'apexxpayment';
  this.id = id;
  this.customer = new Customer();
  this.owner = new Owner();
  this.booking = new Booking();
  this.branding = new Branding();
  this.contactdetailpostal = new ActorContactDetailAddress();
  this.paymentmethod = new PaymentMethod();
  this.currency = new Currency();
  this.bookingpayments = [];
}

ApexxPayment.prototype = new SingleEntity();
ApexxPayment.prototype.toArray = function() {
  
  var arr = {
    amount: this.amount,
    paymentmethodid: this.paymentmethod.id,
    currencyid: this.currency.id
  };
  
  if (this.customer && this.customer.id) {
    arr.customerid = this.customer.id
  }  
  
  if (this.owner && this.owner.id) {
    arr.ownerid = this.owner.id
  }

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
 ApexxPayment.prototype.mutateResponse = function(entity) {
  if (entity.payment) {
    var c = require('./CustomerPayment');
    this.payment = new c();
    this.payment.mutateEntity(entity.payment);
  }

  return this.mutateEntity(entity);
};

ApexxPayment.prototype.createIframe = function() {
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

ApexxPayment.prototype.release = function() {
  return this.updatePromiseResult([this.getUpdatePath(), 'release'].join('/'), {});
};

ApexxPayment.prototype.forcerelease = function() {
  return this.updatePromiseResult([this.getUpdatePath(), 'forcerelease'].join('/'), {});
};

ApexxPayment.prototype.addMissing = function(booking) {
  return this.updatePromiseResult([this.getUpdatePath(), 'missingtransaction'].join('/'), {
    bookingid: booking.id,
    bookingamount: this.bookingamount || 0,
    securitydepositamount: this.securitydepositamount || 0
  });
};

ApexxPayment.prototype.void = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'void'].join('/'), {});
};

ApexxPayment.prototype.abort = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'abort'].join('/'), {});
};

ApexxPayment.prototype.invalidate = function() {
  return this.createPromiseResult([this.getUpdatePath(), 'invalidate'].join('/'), {});
};

ApexxPayment.prototype.refund = function(amount, expirydate) {
  var obj = {
    amount: amount
  };
  if (expirydate) {
    obj.expirydate = expirydate;
  }
  return this.createPromiseResult([this.getUpdatePath(), 'refund'].join('/'), obj);
};

ApexxPayment.prototype.repeat = function(bookingamount, securitydepositamount) {
  return this.createPromiseResult([this.getUpdatePath(), 'repeat'].join('/'), {
    bookingamount: bookingamount,
    securitydepositamount: securitydepositamount
  });
};

ApexxPayment.prototype.detail = function() {
  return client.get([this.getUpdatePath(), 'detail'].join('/'));
};

ApexxPayment.prototype.import = function(bookingId, doNotConfirm, paymentMethod) {
  doNotConfirm = (typeof doNotConfirm !== 'undefined') ?  doNotConfirm : false;
  paymentMethod = (typeof paymentMethod !== 'undefined') ?  paymentMethod : 'W';

  return this.updatePromiseResult([this.getUpdatePath(), 'import', bookingId, doNotConfirm, paymentMethod].join('/'), {});
};

module.exports = ApexxPayment;
