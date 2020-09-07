var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function InformationCategory(id) {
  this.path = 'informationcategory';
  this.id = id;
}
InformationCategory.prototype = new SingleEntity();

InformationCategory.prototype.toArray = function() {
  return {
    informationcategory: this.informationcategory,
    description: this.description,
  };
};

InformationCategory.prototype.validSchema = function() {
  return Joi.object().keys({
    informationcategory: Joi.string().label('informationcategory'),
    description: Joi.string().label('description'),
  });
};

module.exports = InformationCategory;
