var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TemplateTarget(id) {
  this.createPath = this.path = 'templatetarget';
  this.id = id;
  
  this.validSchema = function() {
    return {
      templatetarget: Joi.string().label('Template Target')
    };
  }
}

TemplateTarget.prototype = new SingleEntity();

TemplateTarget.prototype.toArray = function() {
  return {
    templatetarget: this.templatetarget,
  };
};

module.exports = TemplateTarget;
