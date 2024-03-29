var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PropertyQuestionCategory = require('./PropertyQuestionCategory');
var PropertyAnswerDocument = require('./PropertyAnswerDocument');
var Joi = require('joi');

function PropertyAnswer(id) {
    this.path = 'answer';
    this.createPath = 'answer';
    this.id = id;

    this.propertyquestioncategory = new PropertyQuestionCategory();

    this.documents = new Collection({
      object: PropertyAnswerDocument,
      path: 'document',
      parent: this
    }); 
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
  if (this.fromdate != null) {
    fields.fromdate = this.fromdate;
  }
  if (this.todate != null) {
    fields.todate = this.todate;
  }
  return fields;
};

PropertyAnswer.prototype.validSchema = function() {
  return Joi.object().keys({
    propertyquestion: Joi.object().label('Question'),
    booleananswer: Joi.boolean().optional().label('Boolean Answer'),
    textanswer: Joi.string().optional().allow('').label('Text Answer'),
    answeroption: Joi.object().optional().label('Answer Option'),
    fromdate: Joi.date().optional().label('Date from Answer'),
    todate: Joi.date().optional().label('Date to Answer'),
    lastupdatedatetime: Joi.string().optional().allow('').label('Last Update time'),
    lastupdatedbyactor: Joi.object().optional().label('Last Updated By Actor')
  });
};

module.exports = PropertyAnswer;
