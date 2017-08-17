var SingleEntity = require('./SingleEntity');
var OwnerEnquiryActionType = require('./OwnerEnquiryActionType');
var Actor = require('./Actor');
var Joi = require('joi');

function OwnerEnquiryAction(id) {
  this.path = 'enquiryaction';
  this.createPath = 'enquiryaction';
  this.id = id;
  this.ownerenquiryactiontype = new OwnerEnquiryActionType();
  this.completedbytabsuser = new Actor();
}
OwnerEnquiryAction.prototype = new SingleEntity();

OwnerEnquiryAction.prototype.toArray = function() {
  var fields = {
    ownerenquiryactiontypeid: this.ownerenquiryactiontype.id
  };
  if (this.duedate) {
    fields.duedate = this.duedate;
  }
  if (this.completeddate) {
    fields.completeddate = this.completeddate;
    fields.completedbytabsuserid = this.completedbytabsuser ? this.completedbytabsuser.id : null;
  }
  return fields;
};

OwnerEnquiryAction.prototype.validSchema = function() {
  return Joi.object().keys({
    ownerenquiryactiontype: Joi.object().required().label('OwnerEnquiryActionType'),
    duedate: Joi.date().optional().label('duedate'),
    completeddate: Joi.date().optional().label('completeddate'),
    completedbytabsuser: Joi.object().optional().label('completedbytabsuser'),
  });
};

module.exports = OwnerEnquiryAction;
