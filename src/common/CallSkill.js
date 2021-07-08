var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var CallSkillTag = require('./CallSkillTag');
var Joi = require('joi');

function CallSkill(id) {
  this.path = 'callskill';
  this.createPath = 'callskill';
  this.id = id;
  this.parentcallskill = new EntityLink({
    entity: 'CallSkill'
  });
  this.tags = new Collection({
    object: CallSkillTag,
    path: 'tag',
    parent: this
  });
}

CallSkill.prototype = new SingleEntity();
CallSkill.prototype.toArray = function() {
  var s = {
    skillname: this.skillname
  };

  if (this.parentcallskill
    && this.parentcallskill.id
  ) {
    s.parentcallskillid = this.parentcallskill.id;
  }

  return s;
};

CallSkill.prototype.toString = function() {
  return this.skillname;
};

CallSkill.prototype.validSchema = function() {
  return Joi.object().keys({
    skillname: Joi.string().required().label('skill name'),
    parentcallskill: Joi.object().optional().label('Parent call skill')
  });
};

module.exports = CallSkill;
