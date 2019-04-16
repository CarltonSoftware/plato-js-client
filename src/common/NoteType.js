var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function NoteType(id) {
  this.path = 'notetype';
  this.createPath = 'notetype';
  this.id = id;

  this.validSchema = function() {
    return {
      notetype: Joi.string().required().label('note type'),
      notetypedisplay: Joi.string().required().label('note type display'),
      description: Joi.string().required().label('description'),
      donotdelete: Joi.boolean().required().label('do not delete'),
      usercreatable: Joi.boolean().required().label('user createable'),
      autoarchive: Joi.boolean().optional().label('auto archive')
    }
  }
}
NoteType.prototype = new SingleEntity();

NoteType.prototype.toArray = function() {
  return {
    notetype: this.notetype,
    description: this.description,
    donotdelete: this.donotdelete,
    usercreatable: this.usercreatable,
    notetypedisplay: this.notetypedisplay,
    autoarchive: this.autoarchive
  };
};

module.exports = NoteType;
