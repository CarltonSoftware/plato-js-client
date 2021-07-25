var client = require('./platoJsClient').getInstance();
var statusError = require('../error/statusError');
var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var EntityLink = require('./EntityLink');
var NoteFilterCollection = require('./NoteFilterCollection');
var CustomerDocument = require('./CustomerDocument');
var PotentialDuplicate = require('./PotentialDuplicate');
var Language = require('./Language');
var ActorNote = require('./ActorNote');
var Booking = require('./Booking');
var Branding = require('./Branding');
var BankAccount = require('./BankAccount');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var ActorContactDetailPhone = require('./ActorContactDetailPhone');
var ActorContactDetailOther = require('./ActorContactDetailOther');
var ActorManagedActivity = require('./ActorManagedActivity');
var ActorSecurity = require('./ActorSecurity');
var ActorSetting = require('./ActorSetting');
var ActorCategory = require('./ActorCategory');
var ActorProgram = require('./ActorProgram');
var ActorContactDetailPermission = require('./ActorContactDetailPermission');
var Flag = require('./Flag');
var ZendeskTicket = require('./ZendeskTicket');
var _ = require('underscore');

/**
 * Actor instance
 *
 * @param {number} id
 */
function Actor(id) {
  this.id = id;
  this.notes = new NoteFilterCollection({
    noteEntity: this,
    object: ActorNote,
    path: 'actornote'
  });
  this.documents = new Collection({
    object: CustomerDocument,
    path: 'document',
    parent: this
  });
  this.potentialduplicates = new Collection({ object: PotentialDuplicate });
  this.mergedinto = new EntityLink({ entity: 'Actor' });
  this.createdby = new EntityLink({ entity: 'Actor' });

  this.branding = new Branding();
  this.defaultbranding = new Branding();
  this.language = new Language();
  this.language.code = 'EN';
  this.language.name = 'English';
  this.abroad = false;
  this.enquirer = false;

  this.bankaccounts = new Collection({
    object: BankAccount,
    parent: this
  });

  this.activities = new Collection({
    object: ActorManagedActivity,
    parent: this
  });

  this.security = new Collection({
    object: ActorSecurity,
    parent: this,
    path: 'actorsecurity'
  });

  this.settings = new Collection({
    object: ActorSetting,
    parent: this,
    path: 'setting'
  });

  this.categories = new Collection({
    object: ActorCategory,
    parent: this,
    path: 'category'
  });

  this.contactdetails = new Collection({
    object: ActorContactDetailOther,
    parent: this,
    discriminator: 'type',
    discriminatorMap: {
      C: ActorContactDetailOther,
      P: ActorContactDetailAddress,
      F: ActorContactDetailPhone
    }
  });

  this.contactdetailpermissions = new Collection({
    object: ActorContactDetailPermission,
    parent: this,
    path: 'contactdetailpermission'
  });

  this.flags = new Collection({
    object: Flag,
    parent: this,
    path: 'flag'
  });

  this.zendesktickets = new Collection({
    object: ZendeskTicket,
    path: 'zendeskticket',
    parent: this
  });

  this.programs = new Collection({
    object: ActorProgram,
    path: 'program',
    parent: this
  });
}

Actor.prototype = new SingleEntity();

/**
 * Add in collections.  Done this way instead of in the constructor
 * because of recursive dependancy on Actor.
 *
 * @param {object} entity JSON response from api
 */
Actor.prototype.mutateResponse = function(entity) {
  this.bookings = new Collection({
    path: 'booking',
    object: Booking,
    parent: this
  });

  var CustomerPayment = require('./CustomerPayment');
  var BookingPayment = require('./BookingPayment');
  this.accounts = new Collection({
    path: 'account',
    object: CustomerPayment,
    parent: this,
    discriminator: 'type',
    discriminatorMap: {
      Actor: CustomerPayment,
      Booking: BookingPayment,
      SecurityDeposit: BookingPayment
    }
  });

  return this.mutateEntity(entity);
};

/**
 * Return the full name of the actor. Optional noTitle parameter.
 *
 * @returns {String}
 */
Actor.prototype.getFullName = function(noTitle) {
  if (this.path === 'agency') {
    return this.companyname;
  }
  if (this.path === 'office') {
    return this.officename;
  }

  var parts = [];

  if (!noTitle && this.title) {
    parts.push(this.title);
  }

  // Special case for system user
  if (this.firstname == 'system' && this.surname == 'system') {
    return this.surname;
  }

  parts = [this.title, this.firstname, this.surname].filter(function(name) {
    return name && name !== 'NoName' && name !== '<title>';
  });

  if (!parts.length) {
    // return companyname if present, or surname (which is almost certainly 'NoName') as a last resort
   return this.companyname || this.surname;
  }

  return parts.join(' ');
};

/**
 * Return the default booking brand of the actor
 *
 * @returns {Object}
 */
Actor.prototype.getDefaultBookingBrand = function() {
  if (this.defaultbookingbrand && this.defaultbookingbrand.id) {
    return this.defaultbookingbrand;
  }
};

/**
 * Return the default branding of the actor
 *
 * @returns {Object}
 */
Actor.prototype.getDefaultBranding = function() {
  if (this.defaultbranding && this.defaultbranding.id) {
    return this.defaultbranding;
  }
};

/**
 * Return the default branding group
 *
 * @returns {Object}
 */
Actor.prototype.getDefaultBrandingGroup = function() {
  if (this.defaultbrandinggroup && this.defaultbrandinggroup.id) {
    return this.defaultbrandinggroup;
  }
};

/**
 * To String Method
 */
Actor.prototype.toString = Actor.prototype.getFullName;


/**
 * Return up to one of each kind of contact detail (phone, email and address)
 *
 * Doesn't do anything clever with contact preferences (just returns the first of each kind)
 *
 * @param {object} config Configuration options
 *
 * @returns {Object}
 */
Actor.prototype.getContactDetails = function(config) {
  var settings = _.extend({
    excludeInvalid: false, // Skips details marked as invalid
  }, config);
  var details = {};

  this.contactdetails.forEach(function(detail) {
    if (settings.excludeInvalid && detail.invalid) {
      return;
    }
    if (detail.type === 'F' && !details.phone) {
      details.phone = detail;
    } else if (detail.type === 'C' && detail.contactmethodtype.toLowerCase() === 'email' && !details.email) {
      details.email = detail;
    } else if (detail.type === 'P' && !details.address) {
      details.address = detail;
    }
  });

  return details;
};

/**
 * Get an actor contact preference using type,
 *
 * @param {string} type   The contact type
 * @param {string} role   The role
 * @param {string} reason The reason
 *
 * @return {Array}
 */
Actor.prototype.getContactPreference = function(type, role, reason) {
  var preferences = [];
  var contactDetails = this.contactdetails.filter(function(ele) {
    return ele.type == type;
  });

  if (contactDetails && contactDetails.length > 0) {
    // Sort the contact details into preferred order.
    contactDetails.sort(function(ele) {
      if (ele.contactmethodsubtype === 'Main') {
        return 0;
      }
      if (ele.contactmethodsubtype === 'Home') {
        return 1;
      }
      if (ele.contactmethodsubtype === 'Work') {
        return 2;
      }

      return 3;
    });

    for (var i in contactDetails) {
      // Check for contact preference preference
      for (var j in contactDetails[i].contactpreferences.collection) {
        // Ignore preference if the donotuse flag is set and is true
        // or the role or reason do not match
        if (contactDetails[i].contactpreferences.collection[j].donotuse === true
        || contactDetails[i].contactpreferences.collection[j].rolereason.role.name != role
        || contactDetails[i].contactpreferences.collection[j].rolereason.reason.name != reason
        ) {
          continue;
        }

        // We will add the contact detail with the preference to helpful and then return
        var cp = contactDetails[i].contactpreferences.collection[j];
        cp.contact = contactDetails[i];
        preferences.push(cp);
      }
    }
  }

  return preferences;
};

/**
 * Get an actor contact preference using type,
 *
 * @param {string} type   The contact type
 * @param {string} cmt    The contact method type
 * @param {string} role   The role
 * @param {string} reason The reason
 *
 * @return {Array}
 */
Actor.prototype.getContactByPreference = function(type, cmt, role, reason) {
  var contacts = [];
  var contactDetails = this.contactdetails.filter(function(ele) {
    if (type == 'P') {
      return ele.type.toLowerCase() == type.toLowerCase() && ele.invalid == false;
    } else {
      return ele.type.toLowerCase() == type.toLowerCase() && ele.contactmethodtype.toLowerCase() == cmt.toLowerCase() && ele.invalid == false;
    }
  });

  if (contactDetails && contactDetails.length > 0) {
    // Sort the contact details into preferred order.
    contactDetails.sort(function(ele) {
      if (ele.contactmethodsubtype === 'Main') {
        return 0;
      }
      if (ele.contactmethodsubtype === 'Home') {
        return 1;
      }
      if (ele.contactmethodsubtype === 'Work') {
        return 2;
      }

      return 3;
    });

    for (var i in contactDetails) {
      // Check for contact preference preference
      for (var j in contactDetails[i].contactpreferences.collection) {
        // Ignore preference if the donotuse flag is set and is true
        // or the role or reason do not match
        if (contactDetails[i].contactpreferences.collection[j].donotuse === true
        || contactDetails[i].contactpreferences.collection[j].rolereason.role.name != role
        || contactDetails[i].contactpreferences.collection[j].rolereason.reason.name != reason
        ) {
          continue;
        }

        contacts.push(contactDetails[i]);
      }
    }
  }

  return contacts;
};

/**
 * Return the create/put array
 *
 * @returns {Object}
 */
Actor.prototype.toArray = function() {
  var arr = {
    title: this.title,
    firstname: this.firstname,
    surname: this.surname,
    salutation: this.salutation,
    languagecode: this.language.code,
    abroad: this.abroad,
    enquirer: this.enquirer,
    enquirydate: this.enquirydate,
    otheragent: this.otheragent,
    tabsusername: this.tabsusername,
    companyname: this.companyname,
    companynumber: this.companynumber,
    // vat number removed as from TABS2-4729
    //vatnumber: this.vatnumber,
    name: this.officename,
    inactive: this.inactive,
    tabscode: this.tabscode,
    actorcode: this.actorcode,
    accountingreference: this.accountingreference
  };

  if (this.location) {
    arr.location = this.location;
  }

  if (this.ownerdate) {
    arr.ownerdate = this.ownerdate;
  }

  if (this.ownerenquiryinactivereason) {
    arr.ownerenquiryinactivereasonid = this.ownerenquiryinactivereason.id;
  }

  if (this.ownerenquiryinactivedatetime) {
    arr.ownerenquiryinactivedatetime = this.ownerenquiryinactivedatetime;
  }

  if (this.hasOwnProperty('affiliate')) {
    arr.affiliateid = (typeof this.affiliate.id !== 'undefined' && this.affiliate.id)? this.affiliate.id : 'null';
  }
  if (this.createdbyactor) {
    arr.createdbyactorid = this.createdbyactor.id;
  }
  if (this.defaultbranding) {
    arr.defaultbrandingid = this.defaultbranding.id;
  }
  if (this.password && this.password.length > 0) {
    arr.password = this.password;
  }
  if (this.paymentbankaccount) {
    arr.paymentbankaccountid = this.paymentbankaccount.id;
  }
  if (this.creditorpaymentmethod) {
    arr.creditorpaymentmethodid = this.creditorpaymentmethod.id;
  }
  if (this.source) {
    arr.sourceid = this.source.id;
  }
  if (this.assessgrade) {
    arr.assessmentgradeid = this.assessgrade.id;
  }
  if (this.branding) {
    arr.brandingid = this.branding.id;
  }

  //TABS2-3927
  if(this.hasOwnProperty('addaccidentaldamagedeposit')) {
    arr.addaccidentaldamagedeposit = this.addaccidentaldamagedeposit || false;
  }

  if(this.hasOwnProperty('accidentaldamagedepositnotetext')) {
    arr.accidentaldamagedepositnotetext = this.accidentaldamagedepositnotetext;
  }

  if(this.hasOwnProperty('processbookingnotetext')) {
    arr.processbookingnotetext = this.processbookingnotetext;
  }

  if (this.hasOwnProperty('sageaccountname')) {
    arr.sageaccountname = this.sageaccountname;
  }

  if (this.hasOwnProperty('agencyemployed')) {
    arr.agencyemployed = this.agencyemployed;
  }

  if (this.hasOwnProperty('donotpay')) {
    arr.donotpay = this.donotpay;
  }

  if (this.hasOwnProperty('updateworkorders')) {
    arr.updateworkorders = this.updateworkorders;
  }

  return arr;
};

/**
 * Resets the actor's password
 *
 * @returns {Promise}
 */
Actor.prototype.resetPassword = function() {
  return this.updatePromiseResult(this.getUpdatePath() + '/resetpassword', {});
};

/**
 * Generates an arrivals report
 *
 * @returns {Promise}
 */
Actor.prototype.printArrivalsReport = function(doc, values) {
  if (values.bookingbrand) {
    values.bookingbrandid = values.bookingbrand.id;
    delete values.bookingbrand;
  }
  var result = client.post({ path: [this.path, this.id, 'arrivalsreport'].join('/'), entity: values });
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 201) {
        var newLocation = doc.replacePath(res.headers['Content-Location']);
        client.get({ path: newLocation}).then(function(res) {
          resolve(doc.mutateResponse(res.entity));
        }, function(res) {
          reject(new statusError(res));
        }, reject);
      } else {
        reject(new statusError(res));
      }
    }, reject);
  });
};

/**
 * Emails an arrivals report
 *
 * @returns {Promise}
 */
Actor.prototype.emailArrivalsReport = function(values) {
  if (values.bookingbrand) {
    values.bookingbrandid = values.bookingbrand.id;
    delete values.bookingbrand;
  }

  return client.put({ path: [this.path, this.id, 'arrivalsreport'].join('/'), entity: values });
};

/**
 * Emails a ran report
 *
 * @returns {Promise}
 */
Actor.prototype.emailReport = function(reportrun) {
  return client.put({ path: [this.path, this.id, 'sendreport'].join('/'), entity: { reportrunid: reportrun.id } });
};

/**
 * Emails a documentbase
 *
 * @returns {Promise}
 */
Actor.prototype.emailDocument = function(documentbase) {
  return client.put({ path: [this.path, this.id, 'senddocument'].join('/'), entity: { documentbaseid: documentbase.id } });
};


/**
 * Exports the actor's contact log
 *
 * @returns {Promise}
 */
Actor.prototype.exportContactLog = function() {
  return client.post({ path: [this.path, this.id, 'contactexport'].join('/')});
};

module.exports = Actor;
