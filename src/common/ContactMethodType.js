var SingleEntity = require('./SingleEntity');

function ContactMethodType(contactMethodTypeId) {
    this.path = 'contactmethodtype/' + contactMethodTypeId;
    this.id = contactMethodTypeId;
}
ContactMethodType.prototype = new SingleEntity();

module.exports = ContactMethodType;
