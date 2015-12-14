var SingleEntity = require('./SingleEntity');

function ActorAddress(actor, cust_id, address_id) {
    this.path = actor+'/'+cust_id+'/address';
    this.createPath = actor+'/'+cust_id+'/address';
    this.id = address_id;
}
ActorAddress.prototype = new SingleEntity();
ActorAddress.prototype.toArray = function() {
    return {
        id: this.id,
        line1: this.line1,
        line2: this.line2,
        line3: this.line3,
        town: this.town,
        county: this.county,
        postcode: this.postcode,
        countryalpha2code: this.countryalpha2code
    };
};
ActorAddress.prototype.createArray = function() {
    return {
        line1: this.line1,
        line2: this.line2,
        line3: this.line3,
        town: this.town,
        county: this.county,
        postcode: this.postcode,
        countryalpha2code: this.countryalpha2code
    };
};

module.exports = ActorAddress;