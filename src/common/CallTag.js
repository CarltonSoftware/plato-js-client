var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var StaticCollection = require('./StaticCollection');
var Joi = require('joi');

function CallTag(id) {
  this.path = 'calltag';
  this.createPath = 'calltag';
  this.id = id;
  this.parentcalltag = new EntityLink({
    entity: 'CallTag'
  });
  this.childtags = new StaticCollection({
    object: CallTag
  });
}

CallTag.prototype = new SingleEntity();
CallTag.prototype.toArray = function() {
  var s = {
    tagname: this.tagname,
    textinput: this.textinput || false
  };

  if (this.parentcalltag && this.parentcalltag.id) {
    s.parentcalltagid = this.parentcalltag.id;
  }

  return s;
};

CallTag.prototype.toString = function() {
  return this.tagname;
};

CallTag.prototype.validSchema = function() {
  return Joi.object().keys({
    tagname: Joi.string().required().label('tag name'),
    textinput: Joi.boolean().required().label('text required?'),
    parentcalltag: Joi.object().optional().label('Parent tag')
  });
};

module.exports = CallTag;
