var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function BookingCancellationAction(id) {
  this.path = 'cancellationaction';
  this.createPath = 'cancellationaction';
  this.id = id;
}
BookingCancellationAction.prototype = new SingleEntity();

BookingCancellationAction.prototype.validSchema = function() {
  return {
    cancellationaction: Joi.string().required().label('Cancellation Action'),
    duedate: Joi.string().optional().label('Due date'),
    completeddatetime: Joi.string().optional().label('Completed date time')
  };
};

BookingCancellationAction.prototype.toArray = function() {
  return {
    cancellationactionid: this.cancellationaction.id,
    duedate: this.duedate,
    completeddatetime: this.completeddatetime
  };
};

module.exports = BookingCancellationAction;
