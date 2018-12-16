var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function FlagType(id) {
  this.path = 'flagtype';
  this.createPath = 'flagtype';
  this.id = id;

  this.validSchema = function() {
    return {
      flagtype: Joi.string().required().label('Flag type'),
      description: Joi.string().required().label('Description'),
      allowbooking: Joi.boolean().label('Allow booking')
    }
  };
}

FlagType.prototype = new SingleEntity();
FlagType.prototype.toArray = function() {
  return {
    flagtype: this.flagtype,
    description: this.description,
    allowbooking: this.allowbooking,
  };
};


FlagType.prototype.toString = function() {
  return [this.flagtype, this.description].join(' ');
};

module.exports = FlagType;
