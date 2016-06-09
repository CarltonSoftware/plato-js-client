var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrder(id) {
    this.path = this.createPath = 'workorder';
    this.id = id;
    this.property = new EntityLink({
      entity: 'Property'
    });
    this.workordersupplier = new EntityLink({
      entity: 'WorkOrderSupplier'
    });
    this.approvedbytabsuser = new EntityLink({
      entity: 'TabsUser'
    });
}
WorkOrder.prototype = new SingleEntity();

WorkOrder.prototype.toArray = function() {
  return {
    type: this.type,
    propertyid: this.property.id,
    workordersupplierid: this.workordersupplier.id,
    createddatetime: this.createddatetime,
    rating: this.rating,
    shortdescription: this.shortdescription,
    fulldescription: this.fulldescription,
    invoiceto: this.invoiceto,
    labourhours: this.labourhours,
    labourrate: this.labourrate,
    accesscontacttype: this.accesscontacttype,
    accesscontactdetails: this.accesscontactdetails,
    cancelleddatetime: this.cancelleddatetime,

    workordertemplateid: this.workordertemplate.id,
    reporteddate: this.reporteddate,
    preferredstartdate: this.preferredstartdate,
    requiredbydate: this.requiredbydate,
    estimaterequired: this.estimaterequired,
    estimate: this.estimate,
    approveddate: this.approveddate,
    approvedbytabsuserid: this.approvedbytabsuser.id,
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
  };
};

module.exports = WorkOrder;
