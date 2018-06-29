var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AnswerOption(id) {
    this.path = 'answeroption';
    this.createPath = 'answeroption';
    this.id = id;
}
AnswerOption.prototype = new SingleEntity();

AnswerOption.prototype.toArray = function() {
  return {
    answeroption: this.answeroption
  };
};

AnswerOption.prototype.validSchema = function() {
    return Joi.object().keys({
        answeroption: Joi.string().required().label('Answer Option'),
    });
  };

module.exports = AnswerOption;
