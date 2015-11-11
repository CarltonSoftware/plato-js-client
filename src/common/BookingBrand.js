var SingleEntity = require('./SingleEntity');

function BookingBrand(id) {
    this.path = 'bookingbrand';
    this.id = id;
}
BookingBrand.prototype = new SingleEntity();

module.exports = BookingBrand;
