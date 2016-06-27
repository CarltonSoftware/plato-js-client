var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var TicketUser = require('./TicketUser');
var TicketCustomer = require('./TicketCustomer');
var TicketStatus = require('./TicketStatus');
var TicketPriority = require('./TicketPriority');
var TicketMessage = require('./TicketMessage');
var TicketAttachment = require('./TicketAttachment');
var Joi = require('joi');

function Ticket(ticketID) {
  this.createPath = 'ticket';
  this.path = 'ticket';
  this.id = ticketID;
  this.ticketuser = new TicketUser();
  this.ticketcustomer = new TicketCustomer();
  this.status = new TicketStatus();
  this.priority = new TicketPriority();
  this.messages = new Collection({
    object: TicketMessage,
    path: 'message',
    parent: this
  });
  this.attachments = new Collection({
    object: TicketAttachment,
    path: 'attachement',
    parent: this
  });
}
Ticket.prototype = new SingleEntity();

Ticket.prototype.toArray = function() {
  return {
    ip: this.ip,
    completiontime: this.completiontime,
    versionnumber: this.versionnumber,
    subject: this.subject,
    page: this.page,
    read: this.read,
    createddate: this.createddate,
    computername: this.computername,
    tabsuser: this.tabsuser
  };
};

Ticket.prototype.toCreateArray = function() {
  return {
    priority: this.priority.priority,
    versionnumber: this.versionnumber,
    subject: this.subject,
    tabsscreen: this.page,
    computername: this.computername,
    ticketmessage_message: this.ticketmessage_message
  };
};

Ticket.prototype.validSchema = function() {
  return Joi.object().keys({
    priority: Joi.object().required().label('Priority'),
    versionnumber: Joi.string().required().label('Version Number'),
    subject: Joi.string().required().label('Subject'),
    tabsscreen: Joi.string().required().label('Area affected'),
    computername: Joi.string().required().label('Computer Name'),
    ticketmessage_message: Joi.string().required().label('Message')
  });
};

module.exports = Ticket;
