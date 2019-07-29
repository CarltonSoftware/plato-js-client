var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var BookingExtra = require('./BookingExtra');
var ComplaintDiscountExtra = require('./ComplaintDiscountExtra');

function ComplaintBookingExtra(id) {
  this.path = 'bookingextra';
  this.createPath = 'bookingextra';
  this.id = id;

  this.bookingextra = new BookingExtra();
  this.complaintdiscountextra = new ComplaintDiscountExtra();
}
ComplaintBookingExtra.prototype = new SingleEntity();

ComplaintBookingExtra.prototype.validSchema = function() {
  return {
    type: Joi.string().valid('Agency', 'Owner').label('type'),
    price: Joi.number().required().label('price'),
    quantity: Joi.number().required().label('quantity')
  };
};

ComplaintBookingExtra.prototype.toArray = function() {
  return {
    type: this.type,
    price: this.price,
    quantity: this.quantity
  };
};

module.exports = ComplaintBookingExtra;
