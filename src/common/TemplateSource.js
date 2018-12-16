var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TemplateSource(id) {
  this.createPath = this.path = 'templatesource';
  this.id = id;
  
  this.validSchema = function() {
    return {
      templatesource: Joi.string().label('Template Source'),
      sourcesql: Joi.string().allow('').label('Source SQL')
    };
  }
}

TemplateSource.prototype = new SingleEntity();

TemplateSource.prototype.toArray = function() {
  return {
    templatesource: this.templatesource,
    sourcesql: this.sourcesql || ''
  };
};

module.exports = TemplateSource;
