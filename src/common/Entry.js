var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Account = require('./Account');
var BookingBrand = require('./BookingBrand');
var Transaction = require('./Transaction');

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
  this.bookingbrand = new BookingBrand();
  this.transaction = new Transaction();
}
Entry.prototype = new SingleEntity();

module.exports = Entry;
