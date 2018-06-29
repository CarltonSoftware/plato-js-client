var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AnswerOptionGroup(id) {
    this.path = 'answeroptiongroup';
    this.createPath = 'answeroptiongroup';
    this.id = id;
}
AnswerOptionGroup.prototype = new SingleEntity();

AnswerOptionGroup.prototype.toArray = function() {
  return {
    answeroptiongroup: this.answeroptiongroup
  };
};

AnswerOptionGroup.prototype.validSchema = function() {
    return Joi.object().keys({
        answeroptiongroup: Joi.string().required().label('Answer Option group name'),
    });
  };

module.exports = AnswerOptionGroup;
