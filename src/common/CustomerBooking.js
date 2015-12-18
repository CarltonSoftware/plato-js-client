var SingleEntity = require('./SingleEntity');

function CustomerBooking(cust_id, contact_id) {
    this.path = 'booking';
    this.createPath = 'booking';
    this.id = contact_id;
}
CustomerBooking.prototype = new SingleEntity();
CustomerBooking.prototype.toArray = function() {
    return {
        id: this.id
    };
};

module.exports = CustomerBooking;
