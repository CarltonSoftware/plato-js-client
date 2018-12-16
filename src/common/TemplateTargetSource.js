var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function TemplateTargetSource(id) {
  this.createPath = this.path = 'templatetargetsource';
  this.id = id;
  this.templatesource = new EntityLink({ entity: 'TemplateSource' });
  this.templatetarget = new EntityLink({ entity: 'TemplateTarget' });
  
  this.validSchema = function() {
    return {
      templatesource: Joi.object().required().label('Template Source'),
      templatetarget: Joi.object().required().label('Template Target')
    };
  }
}

TemplateTargetSource.prototype = new SingleEntity();

TemplateTargetSource.prototype.toArray = function() {
  return {
    templatesourceid: this.templatesource.id,
    templatetargetid: this.templatetarget.id,
  };
};

TemplateTargetSource.prototype.toString = function() {
  return this.templatesource.templatesource + ' ' + this.templatetarget.templatetarget;
};

module.exports = TemplateTargetSource;
