var SingleEntity = require('./SingleEntity');

function OwnerChargeImport() {
  this.path = this.createPath = 'ownercharge/import';
}

OwnerChargeImport.prototype = new SingleEntity();
OwnerChargeImport.prototype.toArray = function() {
  return {
    tabsuserid: this.tabsuser.id,
    data: this.data.replace(/\n/g, '|'),
    importtype: 'csv'
  };
};

module.exports = OwnerChargeImport;
