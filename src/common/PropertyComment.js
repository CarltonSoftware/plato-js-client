var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function PropertyComment(id) {
  this.createPath = this.path = 'comment';
  this.id = id;
  this.booking = new EntityLink({
    entity: 'Booking'
  });
}
PropertyComment.prototype = new SingleEntity();
PropertyComment.prototype.toArray = function() {
  return {
    comment: this.comment,
    visibletoowner: this.visibletoowner,
    visibleonweb: this.visibleonweb,
    bookingid: this.booking && this.booking.id,
    createddate: this.createddate
  };
};
PropertyComment.prototype.validSchema = function() {
  return Joi.object().keys({
    comment: Joi.string().required().label('Comment'),
    visibletoowner: Joi.boolean().label('Visible to owner'),
    visibleonweb: Joi.boolean().label('Visible on web'),
    booking: Joi.object().label('Booking'),
    createddate: Joi.date().label('Date')
  });
};

module.exports = PropertyComment;
