var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ExtraGroup(id) {
  this.path = this.createPath = 'extragroup';
  this.id = id;

  this.validSchema = function() {
    return {
      extragroup: Joi.string().required().label('Extra group'),
      description: Joi.string().required().label('Description')
    }
  };
}
ExtraGroup.prototype = new SingleEntity();

ExtraGroup.prototype.toArray = function() {
  return {
    extragroup: this.extragroup,
    description: this.description
  };
};

module.exports = ExtraGroup;
