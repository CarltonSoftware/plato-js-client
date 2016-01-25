var Address = require('./Address');

function PropertyAddress(propertyId, addressId) {
  this.path = 'property/'+propertyId+'/address';
  this.createPath = 'property/'+propertyId+'/address';
  this.id = addressId;
}
Address.prototype = new SingleEntity();

module.exports = Address;
