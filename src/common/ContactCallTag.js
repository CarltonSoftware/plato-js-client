var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var CallTag = require('./CallTag');

function ContactCallTag(id) {
  this.path = 'callskilltag';
  this.createPath = 'callskilltag';
  this.id = id;
  this.calltag = new CallTag();
}

ContactCallTag.prototype = new SingleEntity();

ContactCallTag.prototype.toArray = function() {
  return {
    calltagid: this.calltag.id,
    value: this.value
  };
};

ContactCallTag.prototype.toString = function() {
  return this.caltag.tagname;
};

ContactCallTag.prototype.validSchema = function() {
  return Joi.object().keys({
    callskilltag: Joi.object().optional().label('Call Skill Tag')
  });
};

module.exports = ContactCallTag;
