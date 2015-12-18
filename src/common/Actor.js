var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var CustomerDocument = require('./CustomerDocument');
var Note = require('./Note');

function Actor(actor, id) {
    this.path = actor;
    this.createPath = actor;
    this.id = id;
    this.notes = new Collection({object: Note});
    this.documents = new Collection({object: CustomerDocument});
    this.duplicates = new Collection({object: Customer});
}
Actor.prototype = new SingleEntity();
Actor.prototype.toArray = function() {
    return {
        id: this.id,
        title: this.title,
        firstname: this.firstname,
        surname: this.surname
    };
};

/* Hardcode language for now */
Actor.prototype.toCreateArray = function() {
    return {
        title: this.title,
        firstname: this.firstname,
        surname: this.surname,
        salutation: this.salutation,
        languagecode: 'EN'
    };
};

module.exports = Actor;
