var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var PropertyCommentMetric = require('./PropertyCommentMetric');
var Joi = require('joi');

function PropertyComment(id) {
  this.createPath = this.path = 'comment';
  this.id = id;
  this.booking = new EntityLink({
    entity: 'Booking'
  });
  this.metrics = new Collection({
    object: PropertyCommentMetric,
    path: 'metric',
    parent: this
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
    commentdate: this.commentdate,
    firstname: this.firstname,
    surname: this.surname,
    salutation: this.salutation
  };
};
PropertyComment.prototype.schema = function() {
  return {
    comment: Joi.string().required().label('Comment'),
    commenter: Joi.string().optional().allow('').label('Commenter'),
    firstname: Joi.string().optional().allow('').label('First name'),
    surname: Joi.string().optional().allow('').label('Surname'),
    salutation: Joi.string().optional().allow('').label('Salutation'),
    visibletoowner: Joi.boolean().label('Visible to owner'),
    visibleonweb: Joi.boolean().label('Visible on web'),
    booking: Joi.object().optional().label('Booking'),
    createddate: Joi.date().optional().label('Date'),
    commentdate: Joi.date().optional().label('Comment Date')
  };
};
PropertyComment.prototype.toString = function() {
  if (this.salutation) {
    return this.salutation;
  } else if (this.firstname && this.surname) {
    return this.firstname + ' ' + this.surname;
  } else {
    return this.commenter;
  }
};
PropertyComment.prototype.validSchema = function() {
  return Joi.object().keys(this.schema());
};

module.exports = PropertyComment;
