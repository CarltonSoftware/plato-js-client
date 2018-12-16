var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SalesChannel(id) {
  this.path = 'saleschannel';
  this.createPath = 'saleschannel';
  this.id = id;

  this.validSchema = function() {
    return {
      saleschannel: Joi.string().required().label('Sales Channel'),
      description: Joi.string().optional().allow('').label('Description')
    }
  };
}
SalesChannel.prototype = new SingleEntity();

SalesChannel.prototype.toArray = function() {
  return {
    saleschannel: this.saleschannel,
    description: this.description
  };
};

module.exports = SalesChannel;
