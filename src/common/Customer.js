var SingleEntity = require('./SingleEntity');
//var AttributeGroup = require('./AttributeGroup');
//var Collection = require('./StaticCollection');
//var Option = require('./AttributeOption');
//var Unit = require('./Unit');

function Customer(id) {
    this.path = 'customer';
    this.id = id;
}
Customer.prototype = new SingleEntity();

module.exports = Customer;