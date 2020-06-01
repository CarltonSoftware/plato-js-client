var SingleEntity = require('./SingleEntity');

function BookingApproval(id) {
  this.path = 'approval';
  this.createPath = this.path;
  this.id = id;
  
  this.validSchema = function() {
    return {
      createddatetime: Joi.date().required().label('Created Date'), 
      approvingactortype: Joi.string().required().label('Approving Actor Type'), 
      approvingactorid: Joi.number().required().label('Approving Actor'), 
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
    createddatetime: this.createddatetime, 
    approvingactortype: this.approvingactortype, 
    approvingactorid: this.approvingactorid, 
    approved: this.approved, 
    approveddatetime: this.approveddatetime, 
    actioneddatetime: this.actioneddatetime, 
    actionedbyactorid: this.actionedbyactorid,
    comment: this.comment
  };
};

module.exports = BookingApproval;