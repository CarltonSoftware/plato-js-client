var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var TemplateContactMethod = require('./TemplateContactMethod');
var TemplateRoleReason = require('./TemplateRoleReason');

function Template(id) {
  this.createPath = this.path = 'template';
  this.id = id;
  this.templatetargetsource = new EntityLink({ entity: 'TemplateTargetSource' });
  this.triggerevent = new EntityLink({ entity: 'TriggerEvent' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });
  this.branding = new EntityLink({ entity: 'Branding' });
  this.marketingbrand = new EntityLink({ entity: 'MarketingBrand' });
  this.contactmethods = new Collection({
    object: TemplateContactMethod,
    path: 'contactmethod',
    parent: this
  });
  this.rolereasons = new Collection({
    object: TemplateRoleReason,
    path: 'rolereason',
    parent: this
  });
}

Template.prototype = new SingleEntity();

Template.prototype.getFields = function() {
  return client.get(this.getUpdatePath() + '/fields');
};

Template.prototype.toArray = function() {
  return {
    type: this.type,
    templatename: this.templatename,
    templatedescription: this.templatedescription,
    fromdate: this.fromdate,
    todate: this.todate,
    templatetargetsourceid: this.templatetargetsource.id,
    mandatory: this.mandatory,
    sendonce: this.sendonce,
    sendonceper: this.sendonceper,
    triggereventid: this.triggerevent.id,
    daysbeforetrigger: this.daysbeforetrigger,
    showprovisional: this.showprovisional,
    showdepositpaid: this.showdepositpaid,
    showbalancepaid: this.showbalancepaid,
    showcancelledprovisional: this.showcancelledprovisional,
    showcancelledconfirmed: this.showcancelledconfirmed,
    showtransferred: this.showtransferred,
    showowner: this.showowner,
    showflexilet: this.showflexilet,
    showcancelledflexilet: this.showcancelledflexilet,
    bookingbrandid: this.bookingbrand.id,
    brandingid: this.branding.id,
    marketingbrandid: this.marketingbrand.id,
  };
};

module.exports = Template;
