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
  var fields = {
    propertyquestioncategoryid: this.propertyquestioncategory.id,
    question: this.question,
    booleananswerallowed: this.booleananswerallowed,
    booleananswerrequired: this.booleananswerrequired,
    textanswerallowed: this.textanswerallowed,
    textanswerrequired: this.textanswerrequired,
    datefromtoanswerrequired: this.datefromtoanswerrequired,
    optionanswerrequired: this.optionanswerrequired,
    displayorder: this.displayorder
  };
  if (this.answeroptiongroup) {
    fields.answeroptiongroupid = this.answeroptiongroup.id;
  }
  if (this.defaultansweroption) {
    fields.defaultansweroptionid = this.defaultansweroption.id;
  }
  return fields;
};

PropertyQuestion.prototype.validSchema = function() {
  return Joi.object().keys({
    propertyquestioncategory: Joi.object().label('Question Category'),
    question: Joi.string().required().label('Question'),
    booleananswerallowed: Joi.boolean().required().label('Boolean answer allowed'),
    booleananswerrequired: Joi.boolean().required().label('Boolean answer required'),
    textanswerallowed: Joi.boolean().required().label('Text answer allowed'),
    textanswerrequired: Joi.boolean().required().label('Text answer required'),
    datefromtoanswerrequired: Joi.boolean().required().label('Date from answer required'),
    answeroptiongroupid: Joi.object().optional().label('Answer Option group'),
    optionanswerrequired: Joi.boolean().required().label('Option answer required'),
    defaultansweroptionid: Joi.object().optional().label('Default Answer'),
    displayorder: Joi.number().optional().label('display order')
  });
};

module.exports = PropertyQuestion;
