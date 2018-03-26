var SingleEntity = require('./SingleEntity');

function PropertyCommission(id) {
  this.path = 'commission';
  this.createPath = 'commission';
  this.id = id;
}

PropertyCommission.prototype = new SingleEntity();
PropertyCommission.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    commissionpercentage: this.commissionpercentage,
    updateexistingbookings: this.updateexistingbookings,
    forceoverwrite: this.forceoverwrite
  };
};

module.exports = PropertyCommission;