var Actor = require('./Actor');

function Customer(id) {
  this.path = 'customer';
  this.createPath = 'customer';

  Actor.apply(this, arguments);
}
Customer.prototype = new Actor();

module.exports = Customer;
