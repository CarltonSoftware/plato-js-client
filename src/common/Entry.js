var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Account = require('./Account');
var BookingBrand = require('./BookingBrand');

function Entry(id) {
  this.path = 'entry';
  this.createPath = 'entry';
  this.id = id;
  this.account = new Account();
  this.doubleentrydefinition = new EntityLink({
    entity: 'DoubleEntryDefinition'
  });
  this.entrydefinition = new EntityLink({
    entity: 'EntryDefinition'
  });
  this.bookingbrand = new Bookingbrand();
}
Entry.prototype = new SingleEntity();

module.exports = Entry;
