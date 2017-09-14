var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function DocumentBaseTag(id) {
  this.path = 'tag';
  this.createPath = 'tag';
  this.id = id;
}

DocumentBaseTag.prototype = new SingleEntity();

DocumentBaseTag.prototype.toArray = function() {
  return {
    tagid: this.tag.id
  };
};

DocumentBaseTag.prototype.toString = function() {
  return this.tag.tag;
};

module.exports = DocumentBaseTag;
