var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TemplateStyleSheet(id) {
  this.createPath = this.path = 'templatestylesheet';
  this.id = id;
  
  this.validSchema = function() {
    return {
      name: Joi.string().label('name'),
      stylesheet: Joi.string().label('style sheet'),
    };
  }
}

TemplateStyleSheet.prototype = new SingleEntity();

TemplateStyleSheet.prototype.toArray = function() {
  return {
    name: this.name,
    stylesheet: this.stylesheet
  };
};

module.exports = TemplateStyleSheet;
