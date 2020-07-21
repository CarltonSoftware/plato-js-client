var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var CancellationReasonGroup = require('./CancellationReasonGroup');

function CancellationReason(id) {
  this.path = 'cancellationreason';
  this.createPath = 'cancellationreason';
  this.id = id;
  this.cancellationreasongroup = new CancellationReasonGroup();
}
CancellationReason.prototype = new SingleEntity();

CancellationReason.prototype.validSchema = function() {
  return {
    cancellationreason: Joi.string().required().label('Cancellation Reason'),
    cancellationreasongroup: Joi.object().label('Cancellation reason group'),
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
    cancellationreasongroupid: this.cancellationreasongroup.id,
  };
};

module.exports = CancellationReason;
