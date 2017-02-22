var Entity = require('./Entity');

function PropertyBrandingSpecialoffer(propertyId, brandId, fromdate, todate) {
  this.path = '/property/' + propertyId + '/branding/' + brandId + '/specialoffer';
  this.params = {
    fromdate: fromdate,
    todate: todate
  }
}

PropertyBrandingSpecialoffer.prototype = new Entity();

PropertyBrandingSpecialoffer.prototype.mutateEntity = function(entity) {
  return entity;
};

module.exports = PropertyBrandingSpecialoffer;