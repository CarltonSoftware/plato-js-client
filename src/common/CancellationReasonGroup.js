var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function CancellationReasonGroup(id) {
  this.path = this.createPath = 'cancellationreasongroup';
  this.id = id;
 
  this.validSchema = function() {
    return {
      groupname: Joi.string().required().label('CancellationReason group')
    }
  };
}
CancellationReasonGroup.prototype = new SingleEntity();

CancellationReasonGroup.prototype.toArray = function() {
  return {
    groupname: this.groupname,
  };
};

module.exports = CancellationReasonGroup;
