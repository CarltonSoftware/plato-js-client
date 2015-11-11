var SingleEntity = require('./SingleEntity');

function ContactEntity(contactId, contactEntityId) {
    this.createPath = 'contact/' + contactId + '/entity';
    this.path = 'contact/' + contactId + '/entity/' + contactEntityId;
    this.id = contactEntityId;
}
ContactEntity.prototype = new SingleEntity();

ContactEntity.prototype.toCreateArray = function() {
    return {
        contactentitytype: this.contactEntityType,
        entityid: this.entityId,
        function: this.function,
        contactdetailid: this.contactDetailId
    };
};

module.exports = ContactEntity;
