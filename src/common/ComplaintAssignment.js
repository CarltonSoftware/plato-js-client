var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var Actor = require('./Actor.js');

function ComplaintAssignment(id) {
  this.path = 'assignment';
  this.createPath = 'assignment';
  this.id = id;

  this.actor = new Actor();
}
ComplaintAssignment.prototype = new SingleEntity();

ComplaintAssignment.prototype.validSchema = function() {
  return {
    actor: Joi.object().required().label('Tabs user'),
    assigneddatetime: Joi.string().optional().allow('').label('assigned date time'),
    actionrequiredbydatetime: Joi.string().optional().allow('').label('action required by date time')
  };
};

ComplaintAssignment.prototype.toArray = function() {
  var fields = {
    actorid: this.actor.id,
    assigneddatetime: this.assigneddatetime,
    actionrequiredbydatetime: this.actionrequiredbydatetime,
  };
  return fields;
};

module.exports = ComplaintAssignment;
