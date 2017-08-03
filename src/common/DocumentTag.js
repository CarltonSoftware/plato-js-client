var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function DocumentTag(id) {
  this.path = 'documenttag';
  this.createPath = 'documenttag';
  this.id = id;

  this.validSchema = function() {
    return {
      tag: Joi.string().required().min(1).label('tag').description('Tag name')
    }
  };
}

DocumentTag.prototype = new SingleEntity();

DocumentTag.prototype.toArray = function() {
  return {
    tag: this.tag
  };
};

DocumentTag.prototype.toString = function() {
  return this.tag;
};

module.exports = DocumentTag;
