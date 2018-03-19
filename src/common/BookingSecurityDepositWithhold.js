var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function BookingSecurityDepositWithhold(id) {
  this.path = this.createPath = 'withhold';
  this.id = id;
  this.tabsuser = new EntityLink({ entity: 'TabsUser' });
  this.agency = new EntityLink({ entity: 'Agency' });
  this.ownerchargebooking = new EntityLink({ entity: 'OwnerCharge' });
}

BookingSecurityDepositWithhold.prototype = new SingleEntity();
BookingSecurityDepositWithhold.prototype.toArray = function() {
  return {
    type: this.type,
    amount: this.amount,
    reason: this.reason,
    helddate: this.helddate,
    tabsuserid: this.tabsuser.id,
    agencyid: this.agency.id,
    ownerchargebookingid: this.ownerchargebooking.id,
  };
};

module.exports = BookingSecurityDepositWithhold;
