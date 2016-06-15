var SingleEntity = require('./SingleEntity');

function ContactEntity(id) {
  this.createPath = 'entity';
  this.path = 'entity';
  this.id = id;
}
ContactEntity.prototype = new SingleEntity();

ContactEntity.prototype.toCreateArray = function() {
  return {
    contactentitytype: this.contactEntityType,
    entityid: this.entityid,
    function: this.function,
    contactdetailid: this.contactdetailid,
    status_status: this.status_status,
    status_statusdatetime: this.status_statusdatetime,
    status_intermediary: this.status_intermediary,
    status_reference: this.status_reference,
    status_detail: this.status_detail
  };
};

module.exports = ContactEntity;
