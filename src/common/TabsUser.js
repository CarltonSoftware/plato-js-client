var SingleEntity = require('./SingleEntity');

function TabsUser(id) {
    this.path = 'tabsuser';
    this.id = id;
}
TabsUser.prototype = new SingleEntity();

module.exports = TabsUser;
