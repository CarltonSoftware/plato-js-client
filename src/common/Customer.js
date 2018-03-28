var Actor = require('./Actor');
var EntityLink = require('./EntityLink');

function Customer() {
  this.path = 'customer';
  this.createPath = 'customer';

  this.affiliate = new EntityLink({ entity: 'Affiliate' });

  Actor.apply(this, arguments);
}
Customer.prototype = new Actor();

module.exports = Customer;
