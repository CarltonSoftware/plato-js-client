var SingleEntity = require('./SingleEntity');

function CustomerContact(actorId, contactId) {
    this.path = 'customer/' + actorId + '/contact';
    this.createPath = 'contact';
    this.id = contactId;
    this.deleted = false;
}
CustomerContact.prototype = new SingleEntity();

CustomerContact.prototype.toArray = function() {
    return {
        id: this.id,
        contacttype: this.contacttype.type,
        contactmethodtype: this.contactmethodtype.method,
        content: this.content
    };
};

CustomerContact.prototype.toCreateArray = function() {
    return {
        contacttype: this.contacttype,
        contactmethodtype: this.contactmethodtype,
        contactdatetime: this.contactdatetime,
        content: this.content,
        deleted: false
    };
};

module.exports = CustomerContact;
