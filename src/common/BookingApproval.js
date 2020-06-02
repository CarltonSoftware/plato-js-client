var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');
var moment = require('moment');

function BookingApproval(id) {
  this.path = 'approval';
  this.createPath = this.path;
  this.id = id;
  
  this.approvingactor = new EntityLink({
    entity: 'Owner'
  });
  
  this.validSchema = function() {
    return {
      createddatetime: Joi.date().required().label('Created Date'),
      approvingactor: Joi.object().required().label('Approving Actor'), 
      approved: Joi.boolean().optional().label('Approved'), 
      approveddatetime: Joi.date().optional().label(' Approved Date Time'),
      actioneddatetime: Joi.date().optional().label('Actioned Date Time'), 
      actionedbyactorid: Joi.number().optional().empty('').label('Actioned by Actor'),
      comment: Joi.string().optional().label('Comment')
    };
  }
}

BookingApproval.prototype = new SingleEntity();
BookingApproval.prototype.toArray = function() {
  return {
    bookingid: this.bookingid,
    createddatetime: !this.createddatetime ? moment().format('YYYY-MM-DD HH:mm:ss') : this.createddatetime, 
    approvingactortype: this.approvingactor.type, 
    approvingactorid: this.approvingactor.id, 
    approved: this.approved, 
    approveddatetime: this.approveddatetime, 
    actioneddatetime: this.actioneddatetime, 
    actionedbyactorid: this.actionedbyactorid,
    comment: this.comment
  };
};

module.exports = BookingApproval;