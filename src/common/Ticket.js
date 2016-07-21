var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var TicketUser = require('./TicketUser');
var TicketBrand = require('./TicketBrand');
var TicketTerm = require('./TicketTerm');
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
  this.brand = new TicketBrand();
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
  this.terms = new Collection({
    object: TicketTerm,
    path: 'term',
    parent: this
  });
}
Ticket.prototype = new SingleEntity();

Ticket.prototype.toArray = function() {
  return {
    priority: this.priority.priority,
    versionnumber: this.versionnumber,
    subject: this.subject,
    tabsscreen: this.tabsscreen,
    computername: this.computername,
    status: this.status.status
  };
};

Ticket.prototype.toCreateArray = function() {
  var data = this.toArray();
  data.brandcode = this.brand.brandcode;
  data.ticketmessage_message = this.ticketmessage_message;

  return data;
};

Ticket.prototype.schema = function() {
  return {
    priority: Joi.object().required().label('Priority'),
    versionnumber: Joi.string().required().label('Version Number'),
    subject: Joi.string().required().label('Subject'),
    tabsscreen: Joi.string().required().label('Area affected'),
    computername: Joi.string().required().label('Computer Name')
  };
};

Ticket.prototype.createSchema = function() {
  var schema = this.schema();
  schema.ticketmessage_message = Joi.string().required().label('Message');

  return schema;
};

Ticket.prototype.validSchema = function() {
  if (this.id) {
    return Joi.object().keys(this.schema());
  } else {
    return Joi.object().keys(this.createSchema());
  }
};

module.exports = Ticket;
