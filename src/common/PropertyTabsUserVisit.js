var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');

function PropertyTabsUserVisit(id) {
    this.path = 'tabsuservisit';
    this.createPath = 'tabsuservisit';
    this.id = id;

    this.tabsuser = new EntityLink({ entity: 'TabsUser' });
}
PropertyTabsUserVisit.prototype = new SingleEntity();

PropertyTabsUserVisit.prototype.toArray = function() {
  return {
    tabsuserid: this.tabsuser.id,
    visitdatetime: this.visitdatetime,
    reason: this.reason,
    comments: this.comments
  };
};

PropertyTabsUserVisit.prototype.validSchema = function() {
    return Joi.object().keys({
        tabsuser: Joi.object().required().label('tabsuser'),
        visitdatetime: Joi.string().optional().allow('').label('Visit Datetime'),
        reason: Joi.string().optional().allow('').label('Reason'),
        comments: Joi.string().optional().allow('').label('Comments')
    });
  };

module.exports = PropertyTabsUserVisit;
