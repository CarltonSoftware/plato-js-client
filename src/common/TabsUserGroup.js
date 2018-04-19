var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TabsUserGroup(id) {
  this.path = 'tabsusergroup';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {
    return {
      tabsusergroupname: Joi.string().required().label('group name'),
      description: Joi.string().required().label('description'),
      parenttabsusergroup: Joi.object().optional().label('parent user group')
    };
  }
}

TabsUserGroup.prototype = new SingleEntity();
TabsUserGroup.prototype.toArray = function() {
  return {
    tabsusergroupname: this.tabsusergroupname,
    description: this.description,
    parenttabsusergroupid: this.parenttabsusergroup.id
  };
};

module.exports = TabsUserGroup;