var SingleEntity = require('./SingleEntity');
var PropertyQuestionCategory = require('./PropertyQuestionCategory');
var Joi = require('joi');

function PropertyAnswer(id) {
    this.path = 'answer';
    this.createPath = 'answer';
    this.id = id;

    this.propertyquestioncategory = new PropertyQuestionCategory();
}
PropertyAnswer.prototype = new SingleEntity();

PropertyAnswer.prototype.toArray = function() {

  var fields = {
    propertyquestionid: this.propertyquestion.id,
    // answeroptionid: this.answeroption.id,
    // lastupdatedatetime: this.lastupdatedatetime,
    //lastupdatedbyactorid: this.lastupdatedbyactor.id
  };
  if (this.booleananswer != null) {
    fields.booleananswer = this.booleananswer;
  }
  if (this.textanswer != null) {
    fields.textanswer = this.textanswer;
  }
  return fields;
};

PropertyAnswer.prototype.validSchema = function() {
  return Joi.object().keys({
    propertyquestion: Joi.object().label('Question'),
    booleananswer: Joi.boolean().optional().label('Boolean Answer'),
    textanswer: Joi.string().optional().allow('').label('Text Answer'),
    answeroption: Joi.object().optional().label('Answer Option'),
    lastupdatedatetime: Joi.string().optional().allow('').label('Last Update time'),
    lastupdatedbyactor: Joi.object().optional().label('Last Updated By Actor')
  });
};

module.exports = PropertyAnswer;
