var SingleEntity = require('./SingleEntity');
var Property = require('./Property');
var TabsUser = require('./TabsUser');
var WorkOrderStatusHistory = require('./WorkOrderStatusHistory');
var WorkOrderSupplier = require('./WorkOrderSupplier');
var WorkOrderExpense = require('./WorkOrderExpense');
var WorkType = require('./WorkType');
var EntityLink = require('./EntityLink');
var Booking = require('./Booking');
var WorkOrderActor = require('./WorkOrderActor');
var WorkOrderAssociation = require('./WorkOrderAssociation');
var WorkOrderDocument = require('./WorkOrderDocument');
var WorkOrderNote = require('./WorkOrderNote');
var WorkOrderStatusHistorySubStatus = require('./WorkOrderStatusHistorySubStatus');
var NoteFilterCollection = require('./NoteFilterCollection');
var Collection = require('./Collection');

WorkOrder.prototype = new SingleEntity();

function WorkOrder(id) {
  this.path = 'workorder';
  this.createPath = this.path;
  this.id = id;
  this.property = new Property();
  this.workordersupplier = new WorkOrderSupplier();
  this.updatedbyactor = new TabsUser();
  this.booking = new Booking();
  this.worktype = new WorkType();
  this.substatus = new WorkOrderStatusHistorySubStatus();

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

  this.expenses = new Collection({
    object: WorkOrderExpense,
    path: 'expense',
    parent: this
  });  
  
  this.statushistory = new Collection({
    object: WorkOrderStatusHistory,
    path: 'statushistory',
    parent: this
  });

  this.childassociations = new Collection({
    object: WorkOrderAssociation,
    path: 'childassociation',
    parent: this
  });  

  this.parentassociations = new Collection({
    object: WorkOrderAssociation,
    path: 'parentassociation',
    parent: this
  });

  this.actors = new Collection({
    object: WorkOrderActor,
    path: 'actor',
    parent: this
  });
}

WorkOrder.prototype.toArray = function() {
  var arr = {
    type: this.type,
    propertyid: this.property.id,
    rating: this.rating,
    shortdescription: this.shortdescription,
    fulldescription: this.fulldescription,
    invoiceto: this.invoiceto,
    labourhours: this.labourhours,
    labourrate: this.labourrate,
    accesscontacttype: this.accesscontacttype,
    accesscontactdetails: this.accesscontactdetails,

    workordertemplateid: (this.workordertemplate && this.workordertemplate.id) ? this.workordertemplate.id : undefined,
    estimaterequired: this.estimaterequired,
    estimate: this.estimate,

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
    updatedbyactorid: this.updatedbyactor.id,
    setapproved: this.setapproved,
    blockavailability: this.blockavailability,
    addpropertywarning: this.addpropertywarning,
    autogeneratebufferdays: this.autogeneratebufferdays,
    noworkrequired: this.noworkrequired,
  };

  if (this.booking && this.booking.id) {
    arr.bookingid = this.booking.id
  }

  if (this.reporteddate) {
    arr.reporteddate = this.reporteddate
  }
  if (this.preferredstartdate) {
    arr.preferredstartdate = this.preferredstartdate
  }
  if (this.requiredbydate) {
    arr.requiredbydate = this.requiredbydate
  }
  if (this.approveddate) {
    arr.approveddate = this.approveddate
  }
  if (this.starteddate) {
    arr.starteddate = this.starteddate
  }
  if (this.cancelleddatetime) {
    arr.cancelleddatetime = this.cancelleddatetime
  }
  if (this.completeddate) {
    arr.completeddate = this.completeddate
  }
  if (this.invoiceapproveddatetime) {
    arr.invoiceapproveddatetime = this.invoiceapproveddatetime
  }
  if (this.invoicerejecteddatetime) {
    arr.invoicerejecteddatetime = this.invoicerejecteddatetime
  }
  if (this.durationminutes) {
    arr.durationminutes = this.durationminutes
  }
  if (this.preferredstartdatetime) {
    arr.preferredstartdatetime = this.preferredstartdatetime
  }
  if (this.workordersupplier && this.workordersupplier.id) {
    arr.workordersupplierid = this.workordersupplier.id
  } else if (this.supplier && this.supplier.id) {
    arr.supplierid = this.supplier.id
  }
  if (this.worktype && this.worktype.id) {
    arr.worktypeid = this.worktype.id
  }
  if (this.workordersource && this.workordersource.id) {
    arr.workordersourceid = this.workordersource.id;
  }

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
