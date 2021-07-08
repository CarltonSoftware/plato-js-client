var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var CallSkill = require('./CallSkill');
var CallSkillTag = require('./CallSkillTag');

function ContactCallSkillTag(id) {
  this.path = 'callskilltag';
  this.createPath = 'callskilltag';
  this.id = id;
  this.callskilltag = new CallSkillTag();
  this.callskill = new CallSkill();
}

ContactCallSkillTag.prototype = new SingleEntity();
ContactCallSkillTag.prototype.toArray = function() {
  return {
    callskilltagid: this.callskilltag.id
  };
};

ContactCallSkillTag.prototype.toString = function() {
  return [this.callskill.skillname, this.callskilltag.calltag].join(' ');
};

ContactCallSkillTag.prototype.validSchema = function() {
  return Joi.object().keys({
    callskilltag: Joi.object().optional().label('Call Skill Tag')
  });
};

module.exports = ContactCallSkillTag;
