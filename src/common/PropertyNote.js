var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PropertyNote(propertyNoteID) {
  this.createPath = 'propertynote';
  this.path = 'propertynote';
  this.id = propertyNoteID;
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
  this.property = new EntityLink({
    entity: 'Property'
  });
  this.note = new EntityLink({
    entity: 'Note'
  });
}
PropertyNote.prototype = new SingleEntity();

PropertyNote.prototype.toArray = function() {
  return {
    id: this.id,
    propertyid: this.property.id,
    noteid: this.note.id,
    fromdate: this.fromdate,
    todate: this.todate,
    requiresconfirmation: this.requiresconfirmation,
    showonweb: this.showonweb
  };
};

module.exports = PropertyNote;
