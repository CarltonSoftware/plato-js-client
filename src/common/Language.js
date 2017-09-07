var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Language(id) {
  this.path = 'language';
  this.createPath = 'language';
  this.id = id;
  this.code = 'EN';
  this.name = 'English';

  this.validSchema = function() {
    return {
      name: Joi.string().required().min(1).label('name').description('Language name'),
      code: Joi.string().required().min(2).max(2).label('code').description('Language code')
    };
  };
}

Language.prototype = new SingleEntity();
Language.prototype.toArray = function() {
  return {
    name: this.name,
    code: this.code
  };
};

module.exports = Language;
