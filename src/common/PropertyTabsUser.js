var SingleEntity = require('./SingleEntity');
var TabsUser = require('./TabsUser');
var Joi = require('joi');

function PropertyTabsUser(id) {
  this.path = 'tabsuser';
  this.createPath = 'tabsuser';
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

PropertyTabsUser.prototype.validSchema = function() {
    return Joi.object().keys({
      tabsuser: Joi.object().required().label('Tabs User'),
      fromdate: Joi.string().optional().label('fromdate'),
      todate: Joi.string().optional().label('todate')
    });
  };

module.exports = PropertyTabsUser;