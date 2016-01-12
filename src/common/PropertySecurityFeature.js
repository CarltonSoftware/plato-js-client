var SingleEntity = require('./SingleEntity');
var SecurityFeature = require('./SecurityFeature');

function PropertySecurityFeature(propertyId, id) {
  this.path = '/property/' + propertyId + '/securityfeature/' + id;
  this.createPath = this.path;
  this.id = id;
  this.securityfeature = new SecurityFeature();
}
PropertySecurityFeature.prototype = new SingleEntity();

PropertySecurityFeature.prototype.toArray = function() {
  return {
    securityfeatureid: this.securityfeatureid,
    code: this.code,
    notes: this.notes,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = PropertySecurityFeature;