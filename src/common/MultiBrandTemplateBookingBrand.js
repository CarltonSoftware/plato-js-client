var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var BookingBrand = require('./BookingBrand');

function MultiBrandTemplateBookingBrand(templateid,id) {
  this.path = 'multibrandtemplate/' + templateid + '/bookingbrand';
  this.createPath = 'multibrandtemplate/' + templateid + '/bookingbrand';
  this.id = id;

  this.bookingbrand = new BookingBrand();
}
MultiBrandTemplateBookingBrand.prototype = new SingleEntity();

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
