var SingleEntity = require('./SingleEntity');
var Cleaner = require('./Cleaner');

function PropertyCleaner(propertyId, id) {
  this.path = 'cleaner';
  this.createPath = 'cleaner';
  this.id = id;
  this.cleaner = new Cleaner; 
}
PropertyCleaner.prototype = new SingleEntity();

PropertyCleaner.prototype.toArray = function() {
  return {
    id: this.id,
    cleaner: this.cleaner,
    cleanerfromdate: this.cleanerfromdate,
    cleanertodate: this.cleanertodate,
  };
};
PropertyCleaner.prototype.toCreateArray = function() {
  return {
    cleanerid: this.cleanerid,
    cleanerfromdate: this.cleanerfromdate,
    cleanertodate: this.cleanertodate,
  };
};

module.exports = PropertyCleaner;