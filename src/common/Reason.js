var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Reason(id) {
  this.path = 'reason';
  this.createPath = this.path;
  this.id = id;
}
Reason.prototype = new SingleEntity();

Reason.prototype.validSchema = function() {
  return {
    name: Joi.string().required().min(1).label('name').description('Reason name'),
    donotdelete: Joi.boolean().required().label('Do not delete').description('This removes the delete option from the reason admin screen')
  };
};

Reason.prototype.toArray = function() {
  return {
    name: this.name,
    donotdelete: this.donotdelete,
  };
};

module.exports = Reason;
