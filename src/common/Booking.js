var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var Property = require('./Property');
var Collection = require('./Collection');
var BookingCustomer = require('./BookingCustomer');
var Note = require('./Note');

function Booking(id) {
  this.path = 'booking';
  this.createPath = 'booking';
  this.id = id;
  this.branding = new Branding;
  this.property = new Property;
  // this.saleschannel = new SalesChannel;
  // this.pricingperiod = new PricingPeriod;
  // this.price = ;
  // this.currency = new Currency;
  // this.potentialbooking = new PotentialBooking;
  this.customers = new Collection({ object: BookingCustomer });
  this.notes = new Collection({ object: Note });
}
Booking.prototype = new SingleEntity();
Booking.prototype.toArray = function() {
  var array = {
    id: this.id,
    guesttype: this.guesttype,
    fromdate: this.id,
    todate: this.id,
    bookeddatetime: this.id,
    // actorid:
    estimatedarrivaltime: this.id,
    adults: this.adults,
    children: this.children,
    infants: this.infants,
  };
  if (this.guesttype === 'Owner') {
    array.propertyid = this.property.id;
  } else {
    // TODO
  }
  return array;
};

module.exports = Booking;
