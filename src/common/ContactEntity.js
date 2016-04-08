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
    contactdetailid: this.contactdetailid
  };
};

module.exports = ContactEntity;
