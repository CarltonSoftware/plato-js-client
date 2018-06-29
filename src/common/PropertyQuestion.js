var SingleEntity = require('./SingleEntity');
var PropertyQuestionCategory = require('./PropertyQuestionCategory');
var Joi = require('joi');

function PropertyQuestion(id) {
    this.path = 'propertyquestion';
    this.createPath = 'propertyquestion';
    this.id = id;

    this.propertyquestioncategory = new PropertyQuestionCategory();
}
PropertyQuestion.prototype = new SingleEntity();

PropertyQuestion.prototype.toArray = function() {
  return {
    propertyquestioncategoryid: this.propertyquestioncategory.id,
    question: this.question,
    booleananswerallowed: this.booleananswerallowed,
    booleananswerrequired: this.booleananswerrequired,
    textanswerallowed: this.textanswerallowed,
    textanswerrequired: this.textanswerrequired,
    answeroptiongroupid: this.answeroptiongroup.id,
    optionanswerrequired: this.optionanswerrequired,
    defaultansweroptionid: this.defaultansweroption.id
  };
};

PropertyQuestion.prototype.validSchema = function() {
  return Joi.object().keys({
    propertyquestioncategory: Joi.object().label('Question Category'),
    question: Joi.string().required().label('Question'),
    booleananswerallowed: Joi.boolean().required().label('Boolean answer allowed'),
    booleananswerrequired: Joi.boolean().required().label('Boolean answer required'),
    textanswerallowed: Joi.boolean().required().label('Text answer allowed'),
    textanswerrequired: Joi.boolean().required().label('Text answer required'),
    answeroptiongroupid: Joi.object().optional().label('Answer Option group'),
    optionanswerrequired: Joi.boolean().required().label('Text answer required'),
    defaultansweroptionid: Joi.object().optional().label('Default Answer')
  });
};

module.exports = PropertyQuestion;
