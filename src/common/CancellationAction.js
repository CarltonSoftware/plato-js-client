var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationAction(id) {
  this.path = 'cancellationaction';
  this.createPath = 'cancellationaction';
  this.id = id;
}
CancellationAction.prototype = new SingleEntity();

CancellationAction.prototype.validSchema = function() {
  return {
    cancellationaction: Joi.string().required().label('Cancellation Action'),
    description: Joi.string().required().label('Description')
  };
};

CancellationAction.prototype.toArray = function() {
  return {
    cancellationaction: this.cancellationaction,
    description: this.description
  };
};

module.exports = CancellationAction;
