var SingleEntity = require('./SingleEntity');
var TabsUser = require('./TabsUser');

function PropertyNote(propertyNoteID) {
  this.createPath = 'propertynote';
  this.path = 'propertynote';
  this.id = propertyNoteID;
  this.createdby = new TabsUser;
}
PropertyNote.prototype = new SingleEntity();

PropertyNote.prototype.toArray = function() {
  return {
    id: this.id,
    propertyid: this.propertyid,
    noteid: this.noteid,
    fromdate: this.fromdate,
    todate: this.todate,
    requiresconfirmation: this.requiresconfirmation,
    showonweb: this.showonweb
  };
};

PropertyNote.prototype.toCreateArray = function() {
  return {
    propertyid: this.propertyid,
    noteid: this.noteid,
    fromdate: this.fromdate,
    todate: this.todate,
    requiresconfirmation: this.requiresconfirmation,
    showonweb: this.showonweb
  };
};

module.exports = PropertyNote;
