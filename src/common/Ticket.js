var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var StaticCollection = require('./StaticCollection');
var TicketUser = require('./TicketUser');
var TicketBrand = require('./TicketBrand');
var TicketTermValue = require('./TicketTermValue');
var TicketStatus = require('./TicketStatus');
var TicketPriority = require('./TicketPriority');
var TicketMessage = require('./TicketMessage');
var TicketHistory = require('./TicketHistory');
var TicketNote = require('./TicketNote');
var TicketAttachment = require('./TicketAttachment');
var TicketTime = require('./TicketTime');
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
  this.notes = new Collection({
    object: TicketNote,
    path: 'note',
    parent: this
  });
  this.attachments = new Collection({
    object: TicketAttachment,
    path: 'attachement',
    parent: this
  });
  this.terms = new Collection({
    object: TicketTermValue,
    path: 'term',
    parent: this
  });
  this.history = new StaticCollection({
    object: TicketHistory,
    path: 'history',
    parent: this
  });
  this.timespent = new StaticCollection({
    object: TicketTime,
    path: 'time',
    parent: this
  });
}

Ticket.prototype = new SingleEntity();

Ticket.prototype.toArray = function() {
  return {
    priority: this.priority.priority,
    versionnumber: this.versionnumber,
    subject: this.subject,
    read: this.read,
    tabsscreen: this.tabsscreen,
    computername: this.computername,
    status: this.status.status,
    ticketuser: this.ticketuser.username
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
    read: Joi.string().optional().label('Read'),
    tabsscreen: Joi.string().required().label('Area affected'),
    status: Joi.object().optional().label('Ticket Status'),
    ticketuser: Joi.object().optional().label('Ticket User')
  };
};

Ticket.prototype.createSchema = function() {
  var schema = this.schema();
  schema.ticketmessage_message = Joi.string().required().label('Message');
  schema.brand = Joi.object().optional().label('Brand');

  return schema;
};

Ticket.prototype.validSchema = function() {
  if (this.id) {
    return Joi.object().keys(this.schema());
  } else {
    return Joi.object().keys(this.createSchema());
  }
};

Ticket.prototype.addTime = function(time) {
  return this.updatePromiseResult(
    this.getUpdatePath() + '/time',
    { time: time }
  );
};

module.exports = Ticket;
