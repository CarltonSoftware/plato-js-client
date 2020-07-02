var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var moment = require('moment');
var EntityLink = require('./EntityLink');

function BookingApproval(id) {
  this.path = 'approval';
  this.createPath = this.path;
  this.id = id;

  this.approvingactor = new EntityLink({ entity: 'Actor' });
  this.actionedbyactor = new EntityLink({ entity: 'Actor' });

  this.validSchema = function() {
    var s = {
      approvingactor: Joi.object().required().label('Approving Actor'),
      approveddatetime: Joi.date().optional().label('Approved Date Time'),
      actioneddatetime: Joi.date().optional().label('Actioned Date Time'),
      comment: Joi.string().optional().allow('').label('Comment'),
      approverquestion: Joi.string().optional().allow('').label('Question'),
      pending: Joi.boolean().optional().label('Approval Pending')
    };

    if (this.id) {
      s.approved = Joi.boolean().optional().allow(null).label('Approved');
    }

    return s;
  }
}

BookingApproval.prototype = new SingleEntity();
BookingApproval.prototype.toArray = function() {
  var s = {
    bookingid: this.bookingid,
    approvingactortype: this.approvingactor.type,
    approvingactorid: this.approvingactor.id,
    createddatetime: moment().format('YYYY-MM-DD HH:mm:ss'),
    approveddatetime: this.approveddatetime,
    actioneddatetime: this.actioneddatetime,
    comment: this.comment,
    approverquestion: this.approverquestion,
    pending: this.pending
  };

  if (typeof this.approved === 'boolean') {
    s.approved = this.approved;
  }

  return s;
};

module.exports = BookingApproval;