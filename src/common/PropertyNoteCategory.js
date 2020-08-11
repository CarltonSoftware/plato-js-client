var SingleEntity = require('./SingleEntity');
var NoteType = require('./NoteType');
var Joi = require('joi');

function PropertyNoteCategory(id) {
  this.path = 'propertynotecategory';
  this.createPath = 'propertynotecategory';
  this.id = id;
  this.notetype = new NoteType();
}

PropertyNoteCategory.prototype = new SingleEntity();
PropertyNoteCategory.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    notetypeid: this.notetype.id
  };
};

PropertyNoteCategory.prototype.validSchema = function() {
  return Joi.object().keys({
    notetype: Joi.object().required().label('note type'),
    name: Joi.string().required().label('Name'),
    description: Joi.string().optional().allow('').label('Description')
  });
};

module.exports = PropertyNoteCategory;
