var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var Document = require('./Document');
var Owner = require('./Owner');

PmsInvoice.prototype = new SingleEntity();

function PmsInvoice(id) {
  this.path = 'pmsinvoice';
  this.createPath = this.path;
  this.document = new Document();
  this.owner = new Owner();
  this.id = id;
}

PmsInvoice.prototype.toArray = function() {
  return {
    ownerid: this.ownerid,
    chargeids: this.chargeids,
  };
};

PmsInvoice.prototype.preview = function(ownerId, chargeIds, addendum, $workDoneDate) {
  return client.get(
    this.path + 'preview?ownerid=' + ownerId + '&chargeids=' + chargeIds + '&addendum=' + encodeURIComponent(addendum) + '&workdonedate=' + $workDoneDate
  );
};

module.exports = PmsInvoice;
