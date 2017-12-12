var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Country(id) {
  this.path = 'country';
  this.createPath = 'country';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      alpha2: Joi.string().length(2).required().label('alpha2'),
      alpha3: Joi.string().length(3).required().label('alpha3'),
      phonecode: Joi.string().min(1).max(3).required().label('phonecode')
    };
  };
}
Country.prototype = new SingleEntity();
Country.prototype.toArray = function() {
  return {
    name: this.name,
    alpha2: this.alpha2,
    alpha3: this.alpha3,
    phonecode: this.phonecode
  };
};
Country.prototype.toString = function() {
  return this.name;
};


module.exports = Country;
