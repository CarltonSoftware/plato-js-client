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
    subject: this.subject,
    sender: this.sender,
    status_status: this.status_status,
    status_statusdatetime: this.status_statusdatetime,
    status_intermediary: this.status_intermediary,
    status_reference: this.status_reference,
    status_detail: this.status_detail,
    contactdatetime: this.contactdatetime,
    content: this.content,
    deleted: false
  };
};

module.exports = Contact;
