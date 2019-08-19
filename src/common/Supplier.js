var Collection = require('./Collection');
var Actor = require('./Actor');
var SupplierHoliday = require('./SupplierHoliday');
var SupplierWorkingDay = require('./SupplierWorkingDay');

function Supplier() {
  this.path = 'supplier';
  this.createPath = 'supplier';

  this.holidays = new Collection({
    object: SupplierHoliday,
    parent: this
  });

  this.workingdays = new Collection({
    object: SupplierWorkingDay,
    parent: this
  });

  Actor.apply(this, arguments);
}
Supplier.prototype = new Actor();

module.exports = Supplier;
