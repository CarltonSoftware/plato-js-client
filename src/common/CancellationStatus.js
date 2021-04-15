var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationStatus(id) {
  this.path = 'cancellationstatus';
  this.createPath = 'cancellationstatus';
  this.id = id;
}
CancellationStatus.prototype = new SingleEntity();

CancellationStatus.prototype.validSchema = function() {
  return {
    cancellationstatus: Joi.string().required().label('Cancellation Status'),
    description: Joi.string().required().label('Description')
  };
};

CancellationStatus.prototype.toArray = function() {
  return {
    cancellationstatus: this.cancellationstatus,
    description: this.description
  };
};

CancellationStatus.prototype.toString = function() {
  return this.cancellationstatus;
};

module.exports = CancellationStatus;
