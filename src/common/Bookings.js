var Booking = require('./Booking');
var Collection = require('./Collection');


function Bookings(page, limit) {
    this.path = 'booking';
    this.options.path = this.path;
    this.options.object = Booking;
    
    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
}
Bookings.prototype = new Collection();

module.exports = Bookings;