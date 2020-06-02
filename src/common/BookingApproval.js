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
    return {
      approvingactor: Joi.object().required().label('Approving Actor'),
      approved: Joi.boolean().required().label('Approved'),
      approveddatetime: Joi.date().optional().label('Approved Date Time'),
      actioneddatetime: Joi.date().optional().label('Actioned Date Time'),
      comment: Joi.string().optional().allow('').label('Comment')
    };
  }
}

BookingApproval.prototype = new SingleEntity();
BookingApproval.prototype.toArray = function() {
  return {
    bookingid: this.bookingid,
    approvingactortype: this.approvingactor.type,
    approvingactorid: this.approvingactor.id,
    approved: this.approved,
    createddatetime: moment().format('YYYY-MM-DD HH:mm:ss'),
    approveddatetime: this.approveddatetime,
    actioneddatetime: this.actioneddatetime,
    comment: this.comment
  };
};

module.exports = BookingApproval;