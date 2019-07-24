var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');
var ComplaintSource = require('./ComplaintSource');
var ComplaintReason = require('./ComplaintReason');

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
}
Complaint.prototype = new SingleEntity();

Complaint.prototype.validSchema = function() {
  return {
    booking: Joi.object().required().label('Booking'),
    customer: Joi.object().optional().label('Customer'),
    complaintsource: Joi.object().required().label('Complaint Source'),
    complaintreason: Joi.object().required().label('Complaint Reason'),
    complaintdetails: Joi.string().required().label('Complaint Detail'),
    visibletoowner: Joi.boolean().optional().label('Visible to Owner')
  };
};

Complaint.prototype.toArray = function() {
  var fields = {
    bookingid: this.booking.id,
    complaintsourceid: this.complaintsource.id,
    complaintreasonid: this.complaintreason.id,
    complaintdetails: this.complaintdetails,
    visibletoowner: this.visibletoowner
  };
  if (this.customer && this.customer.id) {
      fields.customerid = this.customer.id
  }
  return fields;
};

Complaint.prototype.toUpdateArray = function() {
  console.log(this);
  var fields = {
    bookingid: this.booking.id,
    complaintsourceid: this.source.id,
    complaintreasonid: this.reason.id,
    complaintdetails: this.details,
    visibletoowner: this.visibletoowner
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
