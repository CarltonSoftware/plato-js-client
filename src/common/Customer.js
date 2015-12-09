var SingleEntity = require('./SingleEntity');
// var StaticCollection = require('./StaticCollection');
// var Language = require('./Language');
// var CustomerContactDetailOther = require('./CustomerContactDetailOther');
// var CustomerContactDetails = require('./CustomerContactDetails');
// var Note = require('./ActorNote');

function Customer(id) {
    this.path = 'customer';
    this.createPath = 'customer';
    this.id = id;
    // this.language = new Language();
    // this.contactdetails = new StaticCollection();
    // this.contactdetails = new StaticCollection({ object: CustomerContactDetailOther });
    // this.notes = new StaticCollection({ object: Note });
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
