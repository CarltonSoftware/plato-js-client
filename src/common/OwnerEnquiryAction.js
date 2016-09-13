var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var OwnerEnquiryActionType = require('./OwnerEnquiryActionType');
var Joi = require('joi');

function OwnerEnquiryAction(id) {
  this.path = 'owner';
  this.createPath = 'owner';
  this.id = id;
  this.ownerenquiryactiontype = new OwnerEnquiryActionType();
}
OwnerEnquiryAction.prototype = new SingleEntity();

OwnerEnquiryAction.prototype.toArray = function() {
  return {
    ownerenquiryactiontypeid: this.ownerenquiryactiontype.id,
    duedate: this.duedate,
    completeddate: this.completeddate,
    completedbytabsuserid: this.completedbytabsuser.id,
  };
};

OwnerEnquiryAction.prototype.validSchema = function() {
  return Joi.object().keys({
    ownerenquiryactiontype: Joi.object().required().label('OwnerEnquiryActionType'),
    duedate: Joi.date().optional().label('duedate'),
    completeddate: Joi.date().optional().label('completeddate'),
    completedbytabsuser: Joi.string().label('completedbytabsuser'),
  });
};

module.exports = OwnerEnquiryAction;
