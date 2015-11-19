var SingleEntity = require('./SingleEntity');

function CustomerAddress(cust_id, address_id) {
    this.path = 'customer/'+cust_id+'/address';
    this.id = address_id;
}
CustomerAddress.prototype = new SingleEntity();
CustomerAddress.prototype.toArray = function() {
    return {
        id: this.id,
        line1: this.line1,
        line2: this.line2,
        line3: this.line3,
        town: this.town,
        county: this.county,
        postcode: this.postcode
    };
};

module.exports = CustomerAddress;