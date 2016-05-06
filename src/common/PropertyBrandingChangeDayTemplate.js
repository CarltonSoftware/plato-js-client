var SingleEntity = require('./SingleEntity');
var ChangeDayTemplate = require('./ChangeDayTemplate.js');
/**
 * Property branding changedayrules object
 *
 * @param {number} id
 */
function PropertyBrandingChangeDayTemplate(propertyid, brandingid, id) {
  this.path = 'changedaytemplate';
  this.createPath = 'property/' + propertyid + '/branding/' + brandingid + '/changedaytemplate';
  this.id = id;
  this.changedaytemplate = new ChangeDayTemplate();

  this.changedaytemplate.mutateResponse = function(obj) {
    var ele = this.mutateEntity(obj);
    ele.parent = ele.owner;
    return ele;
  };

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
