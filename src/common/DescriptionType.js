var SingleEntity = require('./SingleEntity');
var Encoding = require('./Encoding');
var Joi = require('joi');

function DescriptionType(id) {
  this.path = 'descriptiontype';
  this.createPath = this.path;
  this.id = id;
  this.encoding = new Encoding();
}

DescriptionType.prototype = new SingleEntity();
DescriptionType.prototype.toArray = function() {
  return {
    code: this.code,
    name: this.name,
    description: this.description,
    encoding: this.encoding.encoding,
    minimumlength: this.minimumlength,
    maximumlength: this.maximumlength,
    donotmodify: this.donotmodify,
    sortorder: this.order
  };
};

DescriptionType.prototype.validSchema = function() {
  return {
    code: Joi.string().min(2).max(8),
    name: Joi.string(),
    description: Joi.string(),
    encoding: Joi.object().required(),
    minimumlength: Joi.number().label('Minimum length'),
    maximumlength: Joi.number().label('Maximum length'),
    donotmodify: Joi.boolean(),
    order: Joi.number(),
  };
};

module.exports = DescriptionType;
