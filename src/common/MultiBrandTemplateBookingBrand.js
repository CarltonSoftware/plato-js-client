var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var BookingBrand = require('./BookingBrand');

function MultiBrandTemplateBookingBrand(id) {
  this.path = this.createPath = 'bookingbrand';
  this.id = id;
  this.bookingbrand = new BookingBrand();
}

MultiBrandTemplateBookingBrand.prototype = new SingleEntity();
MultiBrandTemplateBookingBrand.prototype.getCreatePath = function() {
  return '/multibrandtemplate/' + this.parent.id + '/' + this.path;
};
MultiBrandTemplateBookingBrand.prototype.toCreateArray = function() {
  return {
    bookingbrandid: this.bookingbrandid,
    inactive: false
  };
};

MultiBrandTemplateBookingBrand.validSchema = Joi.object().keys({
  bookingbrandid: Joi.string().required().label('bookingbrand'),
  inactive: Joi.boolean().optional().label('inactive')
});

module.exports = MultiBrandTemplateBookingBrand;
