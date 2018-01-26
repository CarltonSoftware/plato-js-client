var SingleEntity = require('./SingleEntity');
var TabsUser = require('./Tabsuser');

function PropertyTabsUser(id) {
  this.path = 'target';
  this.createPath = this.path;
  this.id = id;

  this.tabsuser = new TabsUser();
}
PropertyTabsUser.prototype = new SingleEntity();
PropertyTabsUser.prototype.toArray = function() {
  return {
    tabsuserid: this.tabsuser.id,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = PropertyTabsUser;