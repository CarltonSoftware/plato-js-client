var Actor = require('./Actor');

function Supplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';

  Actor.apply(this, arguments);
}
Supplier.prototype = new Actor();

module.exports = Supplier;
