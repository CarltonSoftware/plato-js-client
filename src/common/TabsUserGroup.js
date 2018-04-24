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
  var f = {
    tabsusergroupname: this.tabsusergroupname,
    description: this.description,
  };
  if (this.parenttabsusergroup) {
    f.parenttabsusergroupid = this.parenttabsusergroup.id
  }
  return f;
};

module.exports = TabsUserGroup;