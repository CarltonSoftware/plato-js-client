var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var Property = require('./Property');
var Collection = require('./Collection');
var Currency = require('./Currency');
var BookingCustomer = require('./BookingCustomer');
var BookingDocument = require('./BookingDocument');
var BookingGuest = require('./BookingGuest');
var BookingSecurityDeposit = require('./BookingSecurityDeposit');
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
  this.currency = new Currency;
  // this.potentialbooking = new PotentialBooking;

  this.documents = new Collection({
    object: BookingDocument,
    path: 'document',
    parents: [this]
  });
  this.guests = new Collection({
    object: BookingGuest,
    path: 'guest',
    parents: [this]
  });
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

Booking.prototype.getStatus = function() {
  var item = {};

  /* Attempt to derive what state the booking is in... */
  /* showAs is used for the display CSS */
  /* we have to set what to display the booking as here as there are a reasonable amount of brand variations */
  switch (this.guesttype.toLowerCase()) {
    case 'owner':
      item.bookingCustomer = 'Owner';
      // TBD - Check if non-standard
      item.bookingType = 'Owner Booking';
      item.showAs = 'owner';
      break;
    case 'customer':
      // Customer Booking
      item.bookingCustomer = this.customers.collection[0].name;
      item.bookingType = this.status;
      // This is pretty damn horrible. Must be a better way to this, Still being worked on in the API
      // indexOf because every state can be suffixed by - Cancelled or transferred or have brand specific stuff :sadface:

      var showAsOptions = [
        /*
          "Potential - xxxx" - a potential booking of type xxxx (e.g. 'Hold'). Brands can decide what types they want to use.
        */
        'Potential',
        /*
          "Provisional" - customer has confirmed they want to book the property, but haven't yet paid the deposit
        */
        'Provisional',
        /*
          "Confirmed" - customer has paid the deposit
          "Confirmed - Fully Paid" - customer has paid the deposit
        */
        'Confirmed',
        /*
          If the booking has been transferred to another property, or different dates,
          it will have " - Transferred" after whatever status it was at the time of transfer.
          We should probably distinguish from cancelled as I assume there won't be the same
          financial penalty if a transferred booking isn't rebooked.
        */
        'Transferred'
      ];
      for (var i in showAsOptions) {
        if (this.status.indexOf(showAsOptions[i]) !== -1) {
          item.showAs = showAsOptions[i].toLowerCase();
          break;
        }
      }
      break;
    default:
      // Neither customer or owner, this is normally for maintenance, photos, inspections etc.
      item.bookingCustomer = 'None';
      item.bookingType = 'Property unavailable';
      item.showAs = 'unavailable';
  }
  if (this.cancelled) {
    item.showAs = 'cancelled';
  }
  // TBD - Web bookings, flexilet

  return item;
};

module.exports = Booking;
