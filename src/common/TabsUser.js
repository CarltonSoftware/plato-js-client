var Actor = require('./Actor');

function TabsUser() {
  this.path = 'tabsuser';
  this.createPath = 'tabsuser';

  Actor.apply(this, arguments);
}
TabsUser.prototype = new Actor();

module.exports = TabsUser;
