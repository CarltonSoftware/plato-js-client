var SingleEntity = require('./SingleEntity');

function TicketCustomer(id) {
  this.path = 'ticketpriority';
  this.createPath = 'ticketpriority';
  this.id = id;
}
TicketCustomer.prototype = new SingleEntity();
TicketCustomer.prototype.toArray = function() {
  return {
    brandcode: this.brandcode,
    companyname: this.companyname
  };
};

module.exports = TicketCustomer;
