var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');
var ComplaintSource = require('./ComplaintSource');
var ComplaintReason = require('./ComplaintReason');
var ComplaintHolidayStatus = require('./ComplaintHolidayStatus');

function Complaint(id) {
  this.path = 'complaint';
  this.createPath = 'complaint';
  this.id = id;
  this.booking = new EntityLink({
    entity: 'Booking'
  });
  this.customer = new EntityLink({
    entity: 'Customer'
  });
  this.source = new ComplaintSource();
  this.reason = new ComplaintReason();
  this.complaintholidaystatus = new ComplaintHolidayStatus();
}
Complaint.prototype = new SingleEntity();

Complaint.prototype.validSchema = function() {
  return {
    booking: Joi.object().required().label('Booking'),
    customer: Joi.object().optional().label('Customer'),
    complaintsource: Joi.object().required().label('Complaint Source'),
    complaintreason: Joi.object().required().label('Complaint Reason'),
    complaintdetails: Joi.string().required().label('Complaint Detail'),
    visibletoowner: Joi.boolean().optional().label('Visible to Owner'),
    // complaintsubject: Joi.string().required().label('Complaint Subject'),
    // actiontaken: Joi.string().required().label('Action Taken'),
    // nextsteps: Joi.string().required().label('Next Steps'),
    // complaintholidaystatus: Joi.object().required().label('Complaint Holiday Status'),
  };
};

Complaint.prototype.toArray = function() {
  var fields = {
    bookingid: this.booking.id,
    complaintsourceid: this.complaintsource.id,
    complaintreasonid: this.complaintreason.id,
    complaintdetails: this.complaintdetails,
    visibletoowner: this.visibletoowner,
    complaintsubject: '', // this.complaintsubject
    actiontaken: '', // this.actiontaken
    nextsteps: '', // this.nextsteps
    complaintholidaystatusid: 1, // this.complaintholidaystatus.id
  };
  if (this.customer && this.customer.id) {
      fields.customerid = this.customer.id
  }
  return fields;
};

Complaint.prototype.toUpdateArray = function() {
  var fields = {
    bookingid: this.booking.id,
    complaintsourceid: this.source.id,
    complaintreasonid: this.reason.id,
    complaintdetails: this.details,
    visibletoowner: this.visibletoowner,
    complaintsubject: 'N/A', // this.complaintsubject
    actiontaken: 'N/A', // this.actiontaken
    nextsteps: 'N/A', // this.nextsteps
    complaintholidaystatusid: 1, // this.complaintholidaystatus.id
  };
  if (this.customer && this.customer.id) {
      fields.customerid = this.customer.id
  }
  if (this.complaintstatus && this.complaintstatus.id) {
    fields.complaintstatusid = this.complaintstatus.id
  }
  return fields;
};

module.exports = Complaint;
