var SingleEntity = require('./SingleEntity');
//var AttributeGroup = require('./AttributeGroup');
//var Collection = require('./StaticCollection');
//var Option = require('./AttributeOption');
//var Unit = require('./Unit');

function Customer(id) {
    this.path = 'customer';
    this.id = id;

    this.contactPreferences = function() {
      console.log(this.path + ' ' + this.id);
    };
}
Customer.prototype = new SingleEntity();
Customer.prototype.toArray = function() {
    return {
        id: this.id,
        title: this.title,
        firstname: this.firstname,
        surname: this.surname
    };
};

module.exports = Customer;
