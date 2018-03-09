var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var StaticCollection = require('./StaticCollection');
var Currency = require('./Currency');
var SpecialOffer = require('./SpecialOffer');
var BookingCustomer = require('./BookingCustomer');
var BookingDocument = require('./BookingDocument');
var BookingGuest = require('./BookingGuest');
var BookingSecurityDeposit = require('./BookingSecurityDeposit');
var BookingSupplier = require('./BookingSupplier');
var BookingNote = require('./BookingNote');
var NoteFilterCollection = require('./NoteFilterCollection');
var WebBooking = require('./WebBooking');
var BookingExtra = require('./BookingExtra');
var BookingProperty = require('./BookingProperty');
var Promotion = require('./Promotion');

function Booking(id) {
  this.path = 'booking';
  this.createPath = 'booking';
  this.id = id;

  this.branding = new EntityLink({
    entity: 'Branding'
  });
  this.pricedusingbranding = new EntityLink({
    entity: 'Branding'
  });

  this.property = new BookingProperty();

  this.securitydeposit = new BookingSecurityDeposit();
  this.securitydeposit.parent = this;

  this.notes = new NoteFilterCollection({
    noteEntity: this,
    object: BookingNote,
    path: 'bookingnote'
  });

  // this.saleschannel = new SalesChannel;
  // this.pricingperiod = new PricingPeriod;
  this.price = new SingleEntity();
  this.price.specialoffers = new Collection({
    object: SpecialOffer
  });
  this.currency = new Currency();
  // this.potentialbooking = new PotentialBooking;
  this.documents = new Collection({
    object: BookingDocument,
    path: 'document',
    parent: this
  });
  this.guests = new Collection({
    object: BookingGuest,
    path: 'guest',
    parent: this
  });
  this.customers = new Collection({
    object: BookingCustomer,
    path: 'customer',
    parent: this
  });
  this.bookingsuppliers = new Collection({
    object: BookingSupplier,
    path: 'supplier',
    parent: this
  });
  this.suppliers = new StaticCollection({
    object: BookingSupplier
  });
  this.extras = new Collection({
    path: 'extra',
    object: BookingExtra,
    parent: this
  });
  this.promotions = new Collection({
    path: 'promotion',
    object: Promotion,
    parent: this
  });

  this.webbooking = new WebBooking();
}

Booking.prototype = new SingleEntity();

/**
 * Add in Owner object if found.
 *
 * @param {object} entity JSON response from api
 */
Booking.prototype.mutateResponse = function(entity) {
  if (entity && entity.owners) {
    var c = require('./Owner');
    this.owners = new StaticCollection({
      object: c
    });
    this.owners.mutateResponse(entity.owners);
  }

  if (entity && entity.autobalanceactorpayment && entity.autobalanceactorpayment.id) {
    var CustomerPayment = require('./CustomerPayment');
    this.autobalanceactorpayment = new CustomerPayment();
    this.autobalanceactorpayment.mutateEntity(entity.autobalanceactorpayment);
  } else if (entity && entity.autobalanceactorpayment) {
    delete entity['autobalanceactorpayment'];
  }

  if (entity && entity.sagepaypayments) {
    this.sagepaypayments = new StaticCollection({
      object: require('./SagePayPayment')
    });
    this.sagepaypayments.mutateResponse(entity.sagepaypayments);
  }

  if (entity && entity.customerpayments) {
    this.customerpayments = new StaticCollection({
      object: require('./CustomerPayment')
    });
    this.customerpayments.mutateResponse(entity.customerpayments);
  }

  return this.mutateEntity(entity);
};

/**
 * ToArray
 *
 * @return array
 */
Booking.prototype.toArray = function() {
  var array = {
    bookref: this.bookref,
    guesttype: this.guesttype,
    fromdate: this.fromdate,
    todate: this.todate,
    bookeddatetime: this.bookeddatetime,
    adults: this.adults,
    children: this.children,
    infants: this.infants,
    pets: this.pets,
    sourceid: this.sourceid,

    checkintext: this.checkintext,
    checkouttext: this.checkouttext,
    promotioncode: this.promotioncode,
    overridestatus: this.overridestatus,
    bypasspetchecks: this.bypasspetchecks,
    ignorechangedayrules: this.ignorechangedayrules,

    /* Web Booking */
    webbooking_createddatetime: this.webbooking.createddatetime,
    webbooking_reviewstartdatetime: this.webbooking.reviewstartdatetime,
    webbooking_processeddatetime: this.webbooking.processeddatetime,
    webbooking_reviewingtabsuserid: this.webbooking.reviewer.id,

    /* Potential Booking */
    potentialbooking_type: this.potentialbooking_type,
    potentialbooking_expirydatetime: this.potentialbooking_expirydatetime,
    potentialbooking_expired: this.potentialbooking_expired,

    /* Provisional Booking */
    provisionalbooking_depositamountid: this.provisionalbooking_depositamountid,
    provisionalbooking_deposit: this.provisionalbooking_deposit,
    provisionalbooking_depositduedate: this.provisionalbooking_depositduedate,
    provisionalbooking_balanceduedate: this.provisionalbooking_balanceduedate,
    provisionalbooking_commissionpercentage: this.provisionalbooking_commissionpercentage,
    provisionalbooking_ownerpaymenttermsid: this.provisionalbooking_ownerpaymenttermsid,
    provisionalbooking_tabsuserid: this.provisionalbooking_tabsuserid,

    /* Cancelled */
    cancelledbooking_reason: this.cancelledbooking_reason,
    cancelledbooking_adviseddate: this.cancelledbooking_adviseddate,
    cancelledbooking_completeddate: this.cancelledbooking_completeddate,
    cancelledbooking_completedbytabsuserid: this.cancelledbooking_completedbytabsuserid,
    cancelledbooking_priorityrebook: this.cancelledbooking_priorityrebook,
    cancelledbooking_fullrefund: this.cancelledbooking_fullrefund,

    /* Security Deposit */
    securitydeposit_amount: this.securitydeposit_amount,
    securitydeposit_dueindate: this.securitydeposit_dueindate,
    securitydeposit_dueoutdate: this.securitydeposit_dueoutdate,

    bypasschecks: this.bypasschecks
  };

  if (this.confirmedbooking_tabsuserid) {
    array.confirmedbooking_tabsuserid = this.confirmedbooking_tabsuserid;
  }

  if (this.brochureprice && this.brochureprice == 'true') {
    array.brochureprice = 'true';
  }
  if (this.dontpayowneruntildate) {
    array.dontpayowneruntildate = this.dontpayowneruntildate;
  }

  if (this.autobalanceactorpayment) {
    array.autobalanceactorpaymentid = (this.autobalanceactorpayment && this.autobalanceactorpayment.id) ? this.autobalanceactorpayment.id : false;
  }

  // Transferred */
  if (this.transferredtobooking
    && typeof this.transferredtobooking == 'object'
    && this.transferredtobooking.tobooking
  ) {
    array.transferredbooking_tobookingid = this.transferredtobooking.tobooking.id;
    array.transferredbooking_tabsuserid = this.transferredtobooking.tabsuser.id || this.tabsuser.id;
  }
  if (this.transferredfrombooking
    && typeof this.transferredfrombooking == 'object'
    && this.transferredfrombooking.frombooking
  ) {
    array.transferredbooking_frombookingid = this.transferredfrombooking.frombooking.id;
    array.transferredbooking_tabsuserid = this.transferredfrombooking.tabsuser.id || this.tabsuser.id;
  }

  if (this.guesttype === 'Customer') {
    array.propertybrandingid = this.propertybrandingid;
    array.currencycode = this.currencycode;
    array.saleschannel = this.saleschannel.saleschannel ? this.saleschannel.saleschannel : this.saleschannel;
    array.pricingperiod = this.pricingperiod.pricingperiod ? this.pricingperiod.pricingperiod : this.pricingperiod;
    array.sourcemarketingbrandid = this.sourcemarketingbrandid;
    array.estimatedarrivaltime = this.estimatedarrivaltime;
  } else {
    array.propertyid = this.propertyid;
    if (this.guesttype !== 'Owner') {
      array.agencybookingtypeid = this.agencybookingtypeid;
    } else {
      array.ownerbookingtypeid = this.ownerbookingtypeid;
    }
  }

  if (this.propertysecuritydeposit) {
    array.securitydeposit_propertysecuritydepositid = this.propertysecuritydeposit.id;
  }

  return array;
};

Booking.prototype.getStatus = function() {
  var item = {};

  /* Attempt to derive what state the booking is in... */
  /* showAs is used for the display CSS */
  /* we have to set what to display the booking as here as there are a reasonable amount of brand variations */
  switch (this.guesttype.toLowerCase()) {
    case 'owner':
      item.bookingCustomer = 'Owner';
      // TBD - Check if non-standard
      item.bookingType = 'Owner Booking';
      if (this.cancelled) {
        item.bookingType += ' - Cancelled';
      }
      item.showAs = 'owner';
      break;
    case 'customer':
      // Customer Booking
      item.bookingCustomer = this.customers.collection.length ? this.customers.collection[0].name : 'None';
      item.bookingType = this.status;
      // This is pretty damn horrible. Must be a better way to this, Still being worked on in the API
      // indexOf because every state can be suffixed by - Cancelled or transferred or have brand specific stuff :sadface:

      var showAsOptions = [
        /*Invalid - this should probably?? never happen as something has gone wrong */
        'Invalid',
        /*
          If the booking has been transferred to another property, or different dates,
          it will have " - Transferred" after whatever status it was at the time of transfer.
          We should probably distinguish from cancelled as I assume there won't be the same
          financial penalty if a transferred booking isn't rebooked.
        */
        'Transferred',
        /*
          "Potential - xxxx" - a potential booking of type xxxx (e.g. 'Hold'). Brands can decide what types they want to use.
          TODO: we probably don't what to display enquiries, but probably do want to display holds. User configurable?
        */
        'Potential',
        /*
          "Provisional" - customer has confirmed they want to book the property, but haven't yet paid the deposit
        */
        'Provisional',
        /*
          "Confirmed" - customer has paid the deposit
          "Confirmed - Fully Paid" - customer has paid the deposit
        */
        'Confirmed'
      ];
      for (var i in showAsOptions) {
        if (this.status.indexOf(showAsOptions[i]) !== -1) {
          item.showAs = showAsOptions[i].toLowerCase();
          break;
        }
      }
      break;
    default:
      // Neither customer or owner, this is normally for maintenance, photos, inspections etc.
      item.bookingCustomer = 'None';
      item.bookingType = 'Unavailable';
      if (this.cancelled) {
        item.bookingType += ' - Cancelled';
      }
      item.showAs = 'unavailable';
  }
  /* TODO: temp fix for transferred display. */
  if (this.cancelled || this.status == 'Provisional - Transferred' || this.status == 'Confirmed - Transferred') {
    if (this.cancelled && this.cancelledbooking.priorityrebook) {
      item.showAs = 'cancelledpriority';
    } else if (this.status == 'Confirmed - Cancelled' || this.status == 'Confirmed - Fully Paid Cancelled') {
      item.showAs = 'cancelledconfirmed';
    } else {
      item.showAs = 'cancelled';
    }
  }
  // TBD - Web bookings, flexilet

  return item;
};

Booking.prototype.getPartySizeString = function() {
  return [['adults', 'adult'], ['children', 'child'], ['infants', 'infant'], ['pets', 'pet']].filter(function(pair) {
    return this[pair[0]];
  }, this).map(function(pair) {
    var quantity = this[pair[0]];
    return quantity + ' ' + (quantity == 1 ? pair[1] : pair[0]);
  },this).join(', ');
};

Booking.prototype.toString = function() {
  if (this.bookref && (this.bookref !== (this.id + '' + this.property.id))) {
    return this.id + ' (' + this.bookref + ')';
  }
  return this.id;
};

module.exports = Booking;
