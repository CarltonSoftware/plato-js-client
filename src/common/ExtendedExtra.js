var Collection = require('./Collection');
var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var ExtendedExtraItem = require('./ExtendedExtraItem');

function ExtendedExtra(id) {
  this.path = 'extendedextra';
  this.createPath = 'extendedextra';
  this.id = id;

  this.items = new Collection({
    object: ExtendedExtraItem,
    path: 'item',
    parent: this
  });
}
ExtendedExtra.prototype = new SingleEntity();

ExtendedExtra.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    suspended: this.suspended,
    daypricing: this.daypricing,
  };
};

ExtendedExtra.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
    suspended: Joi.boolean().required().label('suspended'),
    daypricing: Joi.boolean().required().label('daypricing'),
  });
};

module.exports = ExtendedExtra;
