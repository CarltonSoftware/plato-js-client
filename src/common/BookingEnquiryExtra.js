var Entity = require('./Entity');

function BookingEnquiryExtra( booking, extra, quantity) {
  this.path = 'booking/'+booking.id+'/enquiry';
  this.createPath = this.path;
  this.params = {
    extraid: extra.id,
    quantity: quantity ? quantity : 1
  };
}
BookingEnquiryExtra.prototype = new Entity();

BookingEnquiryExtra.prototype.mutateEntity = function(entity) {
  return entity;
};

module.exports = BookingEnquiryExtra;
