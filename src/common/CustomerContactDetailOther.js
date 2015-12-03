var SingleEntity = require('./SingleEntity');

function CustomerContactDetailOther(cust_id, contact_id) {
    this.path = 'customer/'+cust_id+'/contactdetailother';
    this.createPath = 'customer/'+cust_id+'/contactdetailother';
    this.id = contact_id;
}
CustomerContactDetailOther.prototype = new SingleEntity();
CustomerContactDetailOther.prototype.toArray = function() {
    return {
        id: this.id,
        contactmethodsubtype: this.contactmethodsubtype,
        contactmethodtype: this.contactmethodtype,
        value: this.value
    };
};

CustomerContactDetailOther.prototype.toCreateArray = function() {
    return {
        contactmethodsubtype: this.contactmethodsubtype,
        contactmethodtype: this.contactmethodtype,
        value: this.value
    };
};


module.exports = CustomerContactDetailOther;
