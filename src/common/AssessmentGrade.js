var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AssessmentGrade(id) {
    this.path = 'assessmentgrade';
    this.createPath = 'assessmentgrade';
    this.id = id;
}
AssessmentGrade.prototype = new SingleEntity();

AssessmentGrade.prototype.validSchema = function() {
  return {
    tabscode: Joi.string().required().label('tabscode'),
    name: Joi.string().required().label('name')
  };
};

AssessmentGrade.prototype.toArray = function() {
  return {
    name: this.name
  };
};

module.exports = AssessmentGrade;