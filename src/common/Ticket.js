var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var TicketUser = require('./TicketUser');
var TicketCustomer = require('./TicketCustomer');
var TicketStatus = require('./TicketStatus');
var TicketPriority = require('./TicketPriority');
var TicketMessage = require('./TicketMessage');
var TicketAttachment = require('./TicketAttachment');

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
    ip: this.ip,
    priority: this.priority,
    versionnumber: this.versionnumber,
    subject: this.subject,
    page: this.page,
    createddate: this.createddate,
    computername: this.computername,
    tabsuser: this.tabsuser,
    ticketmessage_message: this.ticketmessage_message
  };
};

module.exports = Ticket;
