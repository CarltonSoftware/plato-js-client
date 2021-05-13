var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertyEventCategory(id) {
  this.path = this.createPath = 'propertyeventcategory';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('name'),
      description: Joi.string().required().label('description'),
    };
  }
}
PropertyEventCategory.prototype = new SingleEntity();

PropertyEventCategory.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description
  };
};

module.exports = PropertyEventCategory;
