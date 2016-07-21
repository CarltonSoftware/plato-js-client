var SingleEntity = require('./SingleEntity');

function TicketBrand(id) {
  this.path = 'ticketbrand';
  this.createPath = 'ticketbrand';
  this.id = id;
}
TicketBrand.prototype = new SingleEntity();
TicketBrand.prototype.toArray = function() {
  return {
    brandcode: this.brandcode,
    companyname: this.companyname,
    email: this.email,
    telephne: this.telephone,
    keycode: this.keycode
  };
};

module.exports = TicketBrand;
