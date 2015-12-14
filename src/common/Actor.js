var SingleEntity = require('./SingleEntity');

function Actor(actor, id) {
    this.path = actor;
    this.createPath = actor;
    this.id = id;
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
