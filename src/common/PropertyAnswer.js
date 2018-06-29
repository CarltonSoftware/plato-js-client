var SingleEntity = require('./SingleEntity');
var PropertyQuestionCategory = require('./PropertyQuestionCategory');
var Joi = require('joi');

function PropertyAnswer(id) {
    this.path = 'propertyquestioncategory';
    this.createPath = 'propertyquestioncategory';
    this.id = id;

    this.propertyquestioncategory = new PropertyQuestionCategory();
}
PropertyAnswer.prototype = new SingleEntity();

PropertyAnswer.prototype.toArray = function() {
  return {
    propertyquestionid: this.propertyquestion.id,
    booleananswer: this.booleananswer,
    textanswer: this.textanswer,
    answeroptionid: this.answeroption.id,
    lastupdatedatetime: this.lastupdatedatetime,
    lastupdatedbyactorid: this.lastupdatedbyactor.id
  };
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
