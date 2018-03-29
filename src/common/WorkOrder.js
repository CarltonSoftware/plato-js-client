var SingleEntity = require('./SingleEntity');
var Property = require('./Property');
var TabsUser = require('./TabsUser');
var WorkOrderSupplier = require('./WorkOrderSupplier');
var EntityLink = require('./EntityLink');
var Booking = require('./Booking');
var WorkOrderDocument = require('./WorkOrderDocument');
var WorkOrderNote = require('./WorkOrderNote');
var NoteFilterCollection = require('./NoteFilterCollection');
var Collection = require('./Collection');

function WorkOrder(id) {
  this.path = this.createPath = 'workorder';
  this.id = id;
  this.property = new Property();
  this.workordersupplier = new WorkOrderSupplier();
  this.updatedbyactor = new TabsUser();
  this.booking = new Booking();

  this.workordertemplate = new EntityLink({
    entity: 'WorkOrder'
  });

  this.notes = new NoteFilterCollection({
    noteEntity: this,
    object: WorkOrderNote,
    path: 'workordernote'
  });

  this.documents = new Collection({
    object: WorkOrderDocument,
    path: 'document',
    parent: this
  });
}

WorkOrder.prototype = new SingleEntity();

WorkOrder.prototype.toArray = function() {
  var arr = {
    type: this.type,
    propertyid: this.property.id,
    workordersupplierid: this.workordersupplier.id,
    rating: this.rating,
    shortdescription: this.shortdescription,
    fulldescription: this.fulldescription,
    invoiceto: this.invoiceto,
    labourhours: this.labourhours,
    labourrate: this.labourrate,
    accesscontacttype: this.accesscontacttype,
    accesscontactdetails: this.accesscontactdetails,
    cancelleddatetime: this.cancelleddatetime,
    bookingid: this.booking ? this.booking.id : undefined,

    workordertemplateid: (this.workordertemplate && this.workordertemplate.id) ? this.workordertemplate.id : undefined,
    reporteddate: this.reporteddate,
    preferredstartdate: this.preferredstartdate,
    requiredbydate: this.requiredbydate,
    estimaterequired: this.estimaterequired,
    estimate: this.estimate,
    approveddate: this.approveddate,
    starteddate: this.starteddate,
    completeddate: this.completeddate,

    period: this.period,
    frequency: this.frequency,
    dayofweek: this.dayofweek,
    weekofmonth: this.weekofmonth,
    dayofmonth: this.dayofmonth,
    month: this.month,
    maximuminstances: this.maximuminstances,
    autogenerate: this.autogenerate,
    exclusionstartdate: this.exclusionstartdate,
    exclusionenddate: this.exclusionenddate,
    updatedbyactorid: this.updatedbyactor.id
  };

  return arr;
};

WorkOrder.prototype.recur = function() {
  return this.createPromiseResult([this.path, this.id, 'recur'].join('/'), {});
};

WorkOrder.prototype.chargeowner = function(data) {
  return this.updatePromiseResult(
    [this.path, this.id, 'ownercharge'].join('/'),
    this.removeUndefineds(data)
  );
};

WorkOrder.prototype.toString = function() {
  return [this.id, this.type, this.workordersupplier.supplier.getFullName(), this.status].join(' ');
};

module.exports = WorkOrder;
