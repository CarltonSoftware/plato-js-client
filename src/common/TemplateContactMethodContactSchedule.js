var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function TemplateContactMethodContactSchedule(id) {
  this.path = 'contactschedule';
  this.createPath = this.path;
  this.id = id;
}

TemplateContactMethodContactSchedule.prototype = new SingleEntity();

TemplateContactMethodContactSchedule.prototype.validSchema = function () {
  return Joi.object().keys({
    fromdate: Joi.date().required().label('from date'),
    todate: Joi.date().required().label('to date'),
    contactscheduleid: Joi.string().required().allow("").label('contact schedule id')
  });
};

TemplateContactMethodContactSchedule.prototype.toArray = function () {
  var arrObj =  {
    fromdate: this.fromdate,
    todate: this.todate,
    contactscheduleid: this.contactscheduleid
  };
  return arrObj;
};



module.exports = TemplateContactMethodContactSchedule;