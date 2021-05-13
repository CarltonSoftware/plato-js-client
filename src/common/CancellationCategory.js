var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationCategory(id) {
  this.path = 'cancellationcategory';
  this.createPath = 'cancellationcategory';
  this.id = id;
}
CancellationCategory.prototype = new SingleEntity();

CancellationCategory.prototype.validSchema = function() {
  return {
    cancellationcategory: Joi.string().required().label('Cancellation Category'),
    description: Joi.string().required().label('Description')
  };
};

CancellationCategory.prototype.toArray = function() {
  return {
    cancellationcategory: this.cancellationcategory,
    description: this.description
  };
};

CancellationCategory.prototype.toString = function() {
  return this.cancellationcategory;
};

module.exports = CancellationCategory;
