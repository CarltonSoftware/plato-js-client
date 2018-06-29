var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertyQuestionCategory(id) {
    this.path = 'propertyquestioncategory';
    this.createPath = 'propertyquestioncategory';
    this.id = id;
}
PropertyQuestionCategory.prototype = new SingleEntity();

PropertyQuestionCategory.prototype.toArray = function() {
  return {
    questioncategory: this.questioncategory,
    description: this.description
  };
};

PropertyQuestionCategory.prototype.validSchema = function() {
    return Joi.object().keys({
        questioncategory: Joi.string().required().label('QuestionCategory'),
        description: Joi.string().required().label('Description')
    });
  };

module.exports = PropertyQuestionCategory;
