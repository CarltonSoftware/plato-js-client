var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var CallTag = require('./CallTag');

function CallSkillTag(id) {
  this.path = 'tag';
  this.createPath = 'tag';
  this.id = id;
  this.calltag = new CallTag();
}

CallSkillTag.prototype = new SingleEntity();
CallSkillTag.prototype.toArray = function() {
  return {
    calltagid: this.calltag.id
  };
};

CallSkillTag.prototype.toString = function() {
  return this.skillname;
};

CallSkillTag.prototype.validSchema = function() {
  return Joi.object().keys({
    calltag: Joi.object().optional().label('Call Tag')
  });
};

module.exports = CallSkillTag;
