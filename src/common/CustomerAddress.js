var Address = require('./Address');

function CustomerAddress(cust_id, address_id) {
  this.path = 'customer/'+cust_id+'/address';
  this.createPath = 'customer/'+cust_id+'/address';
  this.id = address_id;
}
CustomerAddress.prototype = new Address();

module.exports = CustomerAddress;
