var Entity = require('./Entity');

function PropertyAvailability(propertyId, brandId, fromDate, toDate, includeChangeDays) {
    this.path = '/property/' + propertyId + '/branding/' + brandId + '/availability';
    this.createPath = this.path;
    this.params = {fromdate: fromDate, todate: toDate, includechangedays: includeChangeDays};
}
PropertyAvailability.prototype = new Entity();

module.exports = PropertyAvailability;