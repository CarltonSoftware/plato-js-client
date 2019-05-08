var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function ContactSchedule(id) {
  this.path = 'contactreason';
  this.createPath = 'contactreason';
  this.id = id;
}

ContactSchedule.prototype = new SingleEntity();

ContactSchedule.prototype.validSchema = function () {
  return {
    contactschedule: Joi.string().required().label('Contact Schedule'),
    description: Joi.string().required().label('Description')
  };
};

ContactSchedule.prototype.toArray = function () {
  return {
    contactschedule: this.contactschedule,
    description: this.description
  }
};



module.exports = ContactSchedule;