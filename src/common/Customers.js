var Customer = require('./Customer');
var Collection = require('./Collection');


function Customers(page, limit) {
    this.path = 'customer';
    this.options.path = 'customer';
    this.options.object = Customer;
    
    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
}
Customers.prototype = new Collection();

module.exports = Customers;
