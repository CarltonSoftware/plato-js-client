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
    commenter: this.commenter,
    visibletoowner: this.visibletoowner,
    visibleonweb: this.visibleonweb,
    bookingid: this.booking && this.booking.id,
    createddate: this.createddate,
    commentdate: this.commentdate
  };
};
PropertyComment.prototype.schema = function() {
  return {
    comment: Joi.string().required().label('Comment'),
    commenter: Joi.string().optional().allow('').label('Commenter'),
    visibletoowner: Joi.boolean().label('Visible to owner'),
    visibleonweb: Joi.boolean().label('Visible on web'),
    booking: Joi.object().optional().label('Booking'),
    createddate: Joi.date().optional().label('Date'),
    commentdate: Joi.date().optional().label('Comment Date')
  };
};
PropertyComment.prototype.validSchema = function() {
  return Joi.object().keys(this.schema());
};

module.exports = PropertyComment;
