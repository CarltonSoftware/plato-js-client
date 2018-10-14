var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationReason(id) {
  this.path = 'cancellationreason';
  this.createPath = 'cancellationreason';
  this.id = id;
}
CancellationReason.prototype = new SingleEntity();

CancellationReason.prototype.validSchema = function() {
  return {
    cancellationreason: Joi.string().required().label('Cancellation Reason'),
    covered: Joi.boolean().label('Covered by cancellation protection scheme'),
    agencybooking: Joi.boolean().label('Applies to agency bookings'),
    ownerbooking: Joi.boolean().label('Owner bookings'),
    customerbooking: Joi.boolean().label('Customer bookings'),
    potentialbooking: Joi.boolean().label('Potential bookings'),
    provisionalbooking: Joi.boolean().label('Provisional bookings'),
    confirmedbooking: Joi.boolean().label('Confirmed bookings'),
  };
};

CancellationReason.prototype.toArray = function() {
  return {
    cancellationreason: this.cancellationreason,
    covered: this.covered,
    agencybooking: this.agencybooking,
    ownerbooking: this.ownerbooking,
    customerbooking: this.customerbooking,
    potentialbooking: this.potentialbooking,
    provisionalbooking: this.provisionalbooking,
    confirmedbooking: this.confirmedbooking,
  };
};

module.exports = CancellationReason;
