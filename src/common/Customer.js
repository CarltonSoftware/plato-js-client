var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
// var Language = require('./Language');
// var CustomerContactDetailOther = require('./CustomerContactDetailOther');
var CustomerDocument = require('./CustomerDocument');
var Note = require('./Note');

function Customer(id) {
    this.path = 'customer';
    this.createPath = 'customer';
    this.id = id;
    this.notes = new Collection({object: Note});
    this.documents = new Collection({object: CustomerDocument});
    this.duplicates = new Collection({object: Customer});
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

/* Hardcode language for now */
Customer.prototype.toCreateArray = function() {
    return {
        title: this.title,
        firstname: this.firstname,
        surname: this.surname,
        salutation: this.salutation,
        languagecode: 'EN'
    };
};

module.exports = Customer;
