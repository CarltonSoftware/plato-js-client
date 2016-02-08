var Address = require('./Address');

function PropertyAddress(propertyId, addressId) {
  this.path = 'property/' + propertyId + '/address';
  this.createPath = 'property/' + propertyId + '/address';
  this.id = addressId;
}
PropertyAddress.prototype = new Address();

module.exports = PropertyAddress;
