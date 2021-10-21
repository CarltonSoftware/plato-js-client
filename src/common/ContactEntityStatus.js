var SingleEntity = require('./SingleEntity');
var Actor = require('./Actor');

function ContactEntityStatus(contactId, contactEntityId, contactEntityStatusId) {
  this.createPath = 'contact/' + contactId + '/entity/' + contactEntityId + '/status';
  this.path = 'contact/' + contactId + '/entity/' + contactEntityId + '/status';
  this.id = contactEntityStatusId;
}
ContactEntityStatus.prototype = new SingleEntity();

ContactEntityStatus.prototype.toCreateArray = function() {
  return {
    status: this.status,
    statusdatetime: this.statusdatetime,
    detail: this.detail
  }
};

module.exports = ContactEntityStatus;
