var SingleEntity = require('./SingleEntity');
var Actor = require('./Actor');

function ContactEntity(id) {
  this.createPath = 'entity';
  this.path = 'entity';
  this.id = id;

  this.createdby = new Actor();
}
ContactEntity.prototype = new SingleEntity();

ContactEntity.prototype.toCreateArray = function() {
  var ce = {
    contactentitytype: this.contactEntityType,
    entityid: this.entityid,
    function: this.function,
    contactdetailid: this.contactdetailid,
    intermediary: this.intermediary,
    reference: this.reference,
    perform_send: this.perform_send
  };
  if (!this.perform_send) {
    ce.status_status = this.status_status;
    ce.status_statusdatetime = this.status_statusdatetime;
    ce.status_detail = this.status_detail;
  }
  if (this.createdbyactorid) {
    ce.createdbyactorid = this.createdbyactorid;
  }
  return ce;
};

module.exports = ContactEntity;
