var SingleEntity = require('./SingleEntity');

function CustomerContact(cust_id,contact_id) {
    this.path = 'customer/'+cust_id+'/contactdetailother'; 
    this.id = contact_id;
}
CustomerContact.prototype = new SingleEntity();
CustomerContact.prototype.toArray = function() {
    return {
        id: this.id,
        contactmethodsubtype: this.contactmethodsubtype,
        contactmethodtype: this.contactmethodtype,
        value: this.value
    };
};

module.exports = CustomerContact;