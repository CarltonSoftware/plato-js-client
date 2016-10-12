var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CronTask(id) {
  this.path = this.createPath = 'crontask';
  this.id = id;
}
CronTask.prototype = new SingleEntity();

CronTask.prototype.toArray = function() {
  return {
    schedule: this.schedule,
    type: this.type,
    method: this.method,
    url: this.url,
    parameters: this.parameters,
    headers: this.headers
  };
};

CronTask.prototype.validSchema = function() {
  return Joi.object().keys({
    schedule: Joi.string().required().label('Schedule'),
    type: Joi.string().required().label('Type'),
    method: Joi.string().required().label('Method'),
    url: Joi.string().required().label('URL'),
    parameters: Joi.string().empty('').label('Parameters'),
    headers: Joi.string().empty('').label('Headers')
  });
};


module.exports = CronTask;
