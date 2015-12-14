var SingleEntity = require('./SingleEntity');

function ActorContactDetailOther(actor, cust_id, contact_id) {
    this.path = actor+'/'+cust_id+'/contactdetailother';
    this.createPath = actor+'/'+cust_id+'/contactdetailother';
    this.id = contact_id;
}
ActorContactDetailOther.prototype = new SingleEntity();
ActorContactDetailOther.prototype.toArray = function() {
    return {
        id: this.id,
        contactmethodsubtype: this.contactmethodsubtype,
        contactmethodtype: this.contactmethodtype,
        value: this.value
    };
};

ActorContactDetailOther.prototype.toCreateArray = function() {
    return {
        contactmethodsubtype: this.contactmethodsubtype,
        contactmethodtype: this.contactmethodtype,
        value: this.value
    };
};


module.exports = ActorContactDetailOther;
