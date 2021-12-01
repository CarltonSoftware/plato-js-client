var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Template = require('./Template');
var Actor = require('./Actor');
var ContactDocument = require('./ContactDocument');
var ContactEntity = require('./ContactEntity');
var ContactReason = require('./ContactReason');
var ContactCallTag = require('./ContactCallTag');
var ContactCallSkillTag = require('./ContactCallSkillTag');
var CallSkill = require('./CallSkill');
var Joi = require('joi');

function Contact(contactId) {
  this.path = 'contact';
  this.createPath = 'contact';
  this.id = contactId;
  this.deleted = false;
  this.template = new Template();
  this.createdby = new Actor();
  this.contactreason = new ContactReason();

  this.documents = new Collection({
    object: ContactDocument,
    path: 'document',
    parent: this
  });
  
  this.contactentities = new Collection({
    object: ContactEntity,
    path: 'contactentity',
    parent: this
  });

  this.callskilltags = new Collection({
    object: ContactCallSkillTag,
    path: 'callskilltag',
    parent: this
  });

  this.contactcalltags = new Collection({
    object: ContactCallTag,
    path: 'calltag',
    parent: this
  });

  this.callskill = new CallSkill();
}

Contact.prototype = new SingleEntity();

Contact.prototype.toArray = function() {
  return {
    contacttype: this.contacttype.type,
    contactmethodtype: this.contactmethodtype.method,
    content: this.content
  };
};

Contact.prototype.toCreateArray = function() {
  var c = {
    contacttype: this.contacttype,
    contactmethodtype: this.contactmethodtype,
    subject: this.subject,
    sender: this.sender,
    sendercontactdetailid: this.sendercontactdetailid,
    sourcemarketingbrandid: this.sourcemarketingbrandid,
    status_status: this.status_status,
    status_statusdatetime: this.status_statusdatetime,
    status_intermediary: this.status_intermediary,
    status_reference: this.status_reference,
    status_detail: this.status_detail,
    contactdatetime: this.contactdatetime,
    content: this.content,
    deleted: false,
    templateentityid: this.templateentityid,
    templateid: this.template.id,
    document_documentid: this.document_documentid,
    comments: this.comments,
    requirescomments: this.requirescomments,
    incontactcontactid: this.incontactcontactid,
    incontactmasterid: this.incontactmasterid,
    callskillid: this.callskillid
  };

  if (this.contacttype && this.contacttype.id) {
    c.contacttype = this.contacttype.type;
  }

  if (this.contactmethodtype && this.contactmethodtype.id) {
    c.contactmethodtype = this.contactmethodtype.method;
  }
  
  if (this.contactreason && this.contactreason.id) {
    c.contactreasonid = this.contactreason.id;
  }
  if (this.callskill && this.callskill.id) {
    c.callskillid = this.callskill.id;
  }
  if (this.contactdetailid) {
    c.contactdetailid = this.contactdetailid;
  }
  if(this.templatecontactmethod) {
    c.templatecontactmethod = this.templatecontactmethod;
  }
  if(this.property) {
    c.propertyid = this.property.id;
  }

  return c;
};

Contact.prototype.getRecipient = function() {
  return this.contactentities.filter(function(ce) {
    return ce['function'] === 'to';
  }).shift();
}

Contact.prototype.validSchema = function () {
  return Joi.object().keys({
    details: Joi.string().min(5).label('Details'),
    subject: Joi.string().min(5).label('Subject')
  });
};

module.exports = Contact;
