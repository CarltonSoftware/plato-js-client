var SingleEntity = require('./SingleEntity');

function Contact(contactId) {
  this.path = 'contact';
  this.createPath = 'contact';
  this.id = contactId;
  this.deleted = false;
}
Contact.prototype = new SingleEntity();

Contact.prototype.toArray = function() {
  return {
    contacttype: this.contacttype.type,
    contactmethodtype: this.contactmethodtype.method,
    content: this.content
  };
};

Contact.prototype.toCreateArray = function() {
  return {
    contacttype: this.contacttype,
    contactmethodtype: this.contactmethodtype,
    contactdatetime: this.contactdatetime,
    content: this.content,
    deleted: false
  };
};

module.exports = Contact;
