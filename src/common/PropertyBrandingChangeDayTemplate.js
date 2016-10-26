var SingleEntity = require('./SingleEntity');
var ChangeDayTemplate = require('./ChangeDayTemplate.js');
/**
 * Property branding changedayrules object
 *
 * @param {number} id
 */
function PropertyBrandingChangeDayTemplate(id) {
  this.path = 'changedaytemplate';
  this.createPath = this.path;
  this.id = id;
  this.changedaytemplate = new ChangeDayTemplate();



}

PropertyBrandingChangeDayTemplate.prototype = new SingleEntity();
PropertyBrandingChangeDayTemplate.prototype.toArray = function() {
  return {
    changedaytemplateid: this.changedaytemplateid,
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

module.exports = PropertyBrandingChangeDayTemplate;
