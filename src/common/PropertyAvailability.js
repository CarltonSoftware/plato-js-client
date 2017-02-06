var Entity = require('./Entity');

function PropertyAvailability(propertyId, brandId, fromDate, toDate, includeChangeDays, includeOffers) {
  this.path = '/property/' + propertyId + '/branding/' + brandId + '/availability';
  this.createPath = this.path;
  this.params = {
    fromdate: fromDate,
    todate: toDate,
    includechangedays: includeChangeDays,
    includeoffers: includeOffers
  };
}
PropertyAvailability.prototype = new Entity();

PropertyAvailability.prototype.mutateEntity = function(entity) {
  return entity;
};

module.exports = PropertyAvailability;