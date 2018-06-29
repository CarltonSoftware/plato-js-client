var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertyTabsUserVisit(id) {
    this.path = 'propertytabsuservisit';
    this.createPath = 'propertytabsuservisit';
    this.id = id;
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
        tabsuser: Joi.object().required().label('Tabsuser'),
        visitdatetime: Joi.string().optional().label('Visit Datetime'),
        reason: Joi.string().optional().label('Reason'),
        comments: Joi.string().optional().label('Comments')
    });
  };

module.exports = PropertyTabsUserVisit;
