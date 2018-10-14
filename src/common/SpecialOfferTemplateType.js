var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferTemplateType(id) {
    this.path = 'templatetype';
    this.createPath = 'templatetype';
    this.id = id;
}
SpecialOfferTemplateType.prototype = new SingleEntity();

SpecialOfferTemplateType.prototype.toArray = function() {
  return {
    templatetype: this.templatetype,
    description: this.description
  };
};

SpecialOfferTemplateType.prototype.validSchema = function() {
    return Joi.object().keys({
        templatetype: Joi.string().required().label('Template Type'),
        description: Joi.string().required().label('Description')
    });
  };

module.exports = SpecialOfferTemplateType;
