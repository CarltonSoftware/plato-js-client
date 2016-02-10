var Actor = require('./Actor');

function Supplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
}
Supplier.prototype = new Actor();

module.exports = Supplier;
