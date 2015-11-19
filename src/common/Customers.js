var Customer = require('./Customer');
var Collection = require('./Collection');


function Customers(id) {
    this.path = 'customer';
    this.options.path = 'customer';
    this.options.object = Customer;
}
Customers.prototype = new Collection();

module.exports = Customers;
