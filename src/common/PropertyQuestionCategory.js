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
    description: this.description,
    displayorder: this.displayorder
  };
};

PropertyQuestionCategory.prototype.validSchema = function() {
    return Joi.object().keys({
        questioncategory: Joi.string().required().label('QuestionCategory'),
        description: Joi.string().required().label('Description'),
        displayorder: Joi.string().required().label('DisplayOrder')
    });
  };

module.exports = PropertyQuestionCategory;
