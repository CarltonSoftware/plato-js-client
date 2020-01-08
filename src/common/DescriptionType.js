var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
//var Encoding = require('./Encoding');


function DescriptionType(id) {
  this.path = 'descriptiontype';
  this.createPath = this.path;
  this.id = id;
}

DescriptionType.prototype = new SingleEntity();
DescriptionType.prototype.toArray = function() {

  

  var data = {
    code: this.code,
    name: this.name,
    description: this.description,
    minimumlength: this.minimumlength,
    maximumlength: this.maximumlength,
    donotmodify: this.donotmodify,
    sortorder: this.order
  };

  if(typeof this.encoding === 'object') {
    data.encoding = this.encoding.encoding;
  } else if (typeof this.encoding === 'string' && this.encoding.length > 2) {
    data.encoding = this.encoding;
  }

  return data;
};

DescriptionType.prototype.validSchema = function() {
  return {
    code: Joi.string().min(2).max(8).label('Code'),
    name: Joi.string().label('Name'),
    description: Joi.string().label('Description'),
    encoding: Joi.string().valid('Plain','HTML','XML').required().label('Encoding - Plain, HTML, XML'),
    minimumlength: Joi.number().label('Minimum length'),
    maximumlength: Joi.number().label('Maximum length'),
    donotmodify: Joi.boolean().label('Do not modify'),
    order: Joi.number().label('Sort order'),
  };
};

module.exports = DescriptionType;
