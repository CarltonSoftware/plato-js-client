var SingleEntity = require('./SingleEntity');
var SourceTopic = require('./SourceTopic');
var Joi = require('joi');

function SourceCategory(id) {
  this.path = 'sourcecategory';
  this.createPath = 'sourcecategory';
  this.id = id;
  this.sourcetopic = new SourceTopic();
  }
SourceCategory.prototype = new SingleEntity();
SourceCategory.prototype.toArray = function() {
  return {
    sourcecategory: this.sourcecategory,
    sourcetopicid: this.sourcetopic && this.sourcetopic.id ? this.sourcetopic.id : 0
  };
};

SourceCategory.prototype.validSchema = function() {
  return Joi.object().keys({
    sourcecategory: Joi.string().required().label('Source Category'),
    sourcetopic: Joi.object().optional().label('Source Topic')
  });
};

module.exports = SourceCategory;
