var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');
var ActorContactDetailOther = require('./ActorContactDetailOther');

function TemplateContactMethodBranding(id) {
  this.path = 'branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.replycontactdetail = new ActorContactDetailOther();
}

TemplateContactMethodBranding.prototype = new SingleEntity();

TemplateContactMethodBranding.prototype.validSchema = function () {
  return Joi.object().keys({
    branding: Joi.object().required().label('Branding'),
    replycontactdetail: Joi.object().required().label('Reply Contact Detail')
  });
};

TemplateContactMethodBranding.prototype.toArray = function () {
  return {
    brandingid: this.branding.id,
    replycontactdetailid: this.replycontactdetail.id
  };
};

module.exports = TemplateContactMethodBranding;