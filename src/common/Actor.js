var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var CustomerDocument = require('./CustomerDocument');
var Note = require('./Note');
var Language = require('./Language');
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
    id: this.id,
    title: this.title,
    firstname: this.firstname,
    surname: this.surname,
    salutation: this.salutation,
    languagecode: this.language.code,
    abroad: this.abroad,
    tabsusername: this.tabsusername,
    companyname: this.companyname
  };
};

module.exports = Actor;
