var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ComplaintSource(id) {
  this.path = 'complaintsource';
  this.createPath = 'complaintsource';
  this.id = id;
}
ComplaintSource.prototype = new SingleEntity();

ComplaintSource.prototype.validSchema = function() {
  return {
    complaintsource: Joi.string().required().label('Complaint Source'),
    description: Joi.string().required().label('Description')
  };
};

ComplaintSource.prototype.toArray = function() {
  return {
    complaintsource: this.complaintsource,
    description: this.description
  };
};

ComplaintSource.prototype.toString = function() {
  return this.complaintsource;
};

module.exports = ComplaintSource;
