var SingleEntity = require('./SingleEntity');
var Channel = require('./Channel');
var BookingBrand = require('./BookingBrand');
var Joi = require('joi');

function BlockPeriodChannelBookingBrand(id) {
  this.path = 'channelbookingbrand';
  this.createPath = this.path;
  this.id = id;
  this.channel = new Channel();
  this.bookingbrand = new BookingBrand();

  this.validSchema = function() {
    return {
      bookingbrand: Joi.object().required().label('Booking brand'),
      channel: Joi.object().required().label('Channel'),
      block: Joi.boolean().required().label('Block?').description(
        'Block or unblock this period for the channel/booking brand'
      )
    };
  }
}

BlockPeriodChannelBookingBrand.prototype = new SingleEntity();
BlockPeriodChannelBookingBrand.prototype.toArray = function() {
  return {
    bookingbrandid: this.bookingbrand.id,
    channelid: this.channel.id,
    block: this.block
  };
};

module.exports = BlockPeriodChannelBookingBrand;
