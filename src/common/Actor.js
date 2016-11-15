var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var NoteFilterCollection = require('./NoteFilterCollection');
var StaticCollection = require('./StaticCollection');
var CustomerDocument = require('./CustomerDocument');
var PotentialDuplicate = require('./PotentialDuplicate');
var Language = require('./Language');
var ActorNote = require('./ActorNote');
var Booking = require('./Booking');
var BankAccount = require('./BankAccount');
var ActorContactDetailPhone = require('./ActorContactDetailPhone');
var ActorContactDetailOther = require('./ActorContactDetailOther');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');
var ActorContactDetailPhone = require('./ActorContactDetailPhone');
var ActorManagedActivity = require('./ActorManagedActivity');
var ActorSecurity = require('./ActorSecurity');
var ActorSetting = require('./ActorSetting');

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
  this.documents = new Collection({ object: CustomerDocument });
  this.potentialduplicates = new Collection({ object: PotentialDuplicate });

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

  return this.mutateEntity(entity);
};

/**
 * Return the full name of the actor. Optional noTitle parameter.
 *
 * @returns {String}
 */
Actor.prototype.getFullName = function(noTitle) {
  var name = [this.title, this.firstname, this.surname];
  if (noTitle) {
    name.shift();
  }

  if (this.path == 'agency') {
    name = [this.companyname];
  } else if (this.path == 'office') {
    name = [this.officename];
  }

  return name.join(" ");
};


/**
 * Return up to one of each kind of contact detail (phone, email and address)
 *
 * Doesn't do anything clever with contact preferences (just returns the first of each kind)
 *
 * @returns {Object}
 */
Actor.prototype.getContactDetails = function() {
  var phone, email, address;

  this.contactdetails.forEach(function(detail) {
    if (detail.type === 'C') {
      if (detail.contactmethodtype.toLowerCase() === 'phone' && !phone) {
        phone = detail.value;
      } else if (detail.contactmethodtype.toLowerCase() === 'email' && !email) {
        email = detail.value;
      }
    } else if (detail.type === 'P' && !address) {
      address = detail.address.toString();
    }
  });

  return {
    phone: phone,
    email: email,
    address: address
  };
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
    ownerdate: this.ownerdate,
    otheragent: this.otheragent,
    assessgrade: this.assessgrade,
    tabsusername: this.tabsusername,
    companyname: this.companyname,
    companynumber: this.companynumber,
    vatnumber: this.vatnumber,
    name: this.officename,
    inactive: this.inactive,
    accountingreference: this.accountingreference
  };

  if (this.password && this.password.length > 0) {
    arr.password = this.password;
  }
  if (this.bacsbankaccount) {
    arr.bacsbankaccountid = this.bacsbankaccount.id;
  }
  if (this.ownerpaymenttype) {
    arr.ownerpaymenttypeid = this.ownerpaymenttype.id;
  }
  if (this.source) {
    arr.sourceid = this.source.id;
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

module.exports = Actor;
