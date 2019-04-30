var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function TabsUserGroupMember(id) {
    this.path = 'member';
    this.createPath = this.path;
    this.id = id;

    this.validSchema = function() {
        return {
            userid: Joi.string().required().label('Tabs user id'),
            inactive: Joi.boolean().optional().label('Inactive')
        };
    }
}

TabsUserGroupMember.prototype = new SingleEntity();

TabsUserGroupMember.prototype.toArray = function() {
    return {
        tabsuserid: this.userid,
        inactive: this.inactive
    }
}

module.exports = TabsUserGroupMember;