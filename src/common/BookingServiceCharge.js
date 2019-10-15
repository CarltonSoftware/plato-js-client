var SingleEntity = require('./SingleEntity');

function BookingServiceCharge(id) {
    this.id = id;
    this.path = 'charge';
    this.createPath = this.path;
}

BookingServiceCharge.prototype = new SingleEntity();

BookingServiceCharge.prototype.toArray = function() {
    return {
      charge: this.charge,
      currencyid: this.currencyid,
      perperiod: this.perperiod,
      includesvat: this.includesvat,
      vatbandid: this.vatbandid,
      ownerchargecodeid: this.ownerchargecodeid
    };
  };

module.exports = BookingServiceCharge;