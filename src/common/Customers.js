var Entity = require('./Entity');
//var AttributeGroup = require('./AttributeGroup');
//var Collection = require('./StaticCollection');
//var Option = require('./AttributeOption');
//var Unit = require('./Unit');

function Customers(id) {
    this.path = 'customer';
}
Customers.prototype = new Entity();

module.exports = Customers;