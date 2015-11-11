var SingleEntity = require('./SingleEntity');

function ContactType(contactTypeId) {
    this.path = 'contacttype/' + contactTypeId;
    this.id = contactTypeId;
}
ContactType.prototype = new SingleEntity();

module.exports = ContactType;
