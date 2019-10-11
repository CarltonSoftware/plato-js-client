var SingleEntity = require('./SingleEntity');

function BookingServiceCharge() {
    this.path = 'charge';
    this.createPath = this.path;
}

BookingServiceCharge.prototype = new SingleEntity();

BookingServiceCharge.prototype.toArray = function() {
    return {
      charge: this.charge,
      currencyid: this.currency.id,
      perperiod: this.perperiod,
      includesvat: this.includesvat,
      vatbandid: this.vatband.id,
      ownerchargecodeid: this.ownerchargecode.id
    };
  };

module.exports = BookingServiceCharge;