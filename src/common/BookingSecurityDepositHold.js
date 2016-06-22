var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function BookingSecurityDepositHold(id) {
  this.path = this.createPath = 'withhold';
  this.id = id;
  this.tabsuser = new EntityLink({ entity: 'TabsUser' });
}

BookingSecurityDepositHold.prototype = new SingleEntity();
BookingSecurityDepositHold.prototype.toArray = function() {
  return {
    type: this.type,
    helddate: this.helddate,
    helduntildate: this.helduntildate,
    reason: this.reason,
    tabsuserid: this.tabsuser.id,
  };
};


module.exports = BookingSecurityDepositHold;
