var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var StaticCollection = require('./StaticCollection');
var CustomerDocument = require('./CustomerDocument');
var Note = require('./Note');
var Language = require('./Language');
var Booking = require('./Booking');
var BankAccount = require('./BankAccount');
var ActorContactDetailOther = require('./ActorContactDetailOther');
var ActorContactDetailAddress = require('./ActorContactDetailAddress');

/**
 * Actor instance
 *
 * @param {number} id
 */
function Actor(id) {
  this.id = id;
  this.notes = new Collection({ object: Note });
  this.documents = new Collection({ object: CustomerDocument });
  this.duplicates = new Collection({ object: Actor });

  this.language = new Language();
  this.language.code = 'EN';
  this.language.name = 'English';
  this.abroad = false;

  this.bankaccounts = new Collection({
    object: BankAccount,
    parent: this
  });

  this.contactdetails = new Collection({
    object: ActorContactDetailOther,
    parent: this,
    discriminator: 'type',
    discriminatorMap: {
      'C': ActorContactDetailOther,
      'P': ActorContactDetailAddress
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
 * Return the full name of the actor
 *
 * @return {String}
 */
Actor.prototype.getFullName = function() {
  return [this.title, this.firstname, this.surname].join(" ");
};

/**
 * Return the create/put array
 *
 * @return {Object}
 */
Actor.prototype.toArray = function() {
  return {
    title: this.title,
    firstname: this.firstname,
    surname: this.surname,
    salutation: this.salutation,
    languagecode: this.language.code,
    abroad: this.abroad,
    tabsusername: this.tabsusername,
    companyname: this.companyname,
    name: this.officename
  };
};

module.exports = Actor;
