var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CallTag(id) {
  this.path = 'calltag';
  this.createPath = 'calltag';
  this.id = id;
};

CallTag.prototype = new SingleEntity();
CallTag.prototype.toArray = function() {
  return {
    tagname: this.tagname
  };
};

CallTag.prototype.toString = function() {
  return this.tagname;
};

CallTag.prototype.validSchema = function() {
  return Joi.object().keys({
    tagname: Joi.string().required().label('tag name')
  });
};

module.exports = CallTag;
