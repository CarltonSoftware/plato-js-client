var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function BedType(id) {
  this.path = 'bedtype';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {
    return {
      bedtype: Joi.string().required().label('bed type'),
      sleepsadults: Joi.string().required().label('sleeps adults'),
      sleepschildren: Joi.string().required().label('sleeps children'),
      sleepsinfants: Joi.string().required().label('sleeps infants')
    };
  }
}

BedType.prototype = new SingleEntity();
BedType.prototype.toArray = function() {
  return {
    bedtype: this.bedtype,
    sleepsadults: this.sleepsadults,
    sleepschildren: this.sleepschildren,
    sleepsinfants: this.sleepsinfants
  };
};

BedType.prototype.toString = function() {
  return this.bedtype + ' (' + [this.sleepsadults, this.sleepschildren, this.sleepsinfants].join(', ') + ')';
};

module.exports = BedType;
