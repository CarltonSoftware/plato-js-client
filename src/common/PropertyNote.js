var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Note = require('./Note');

function PropertyNote(id) {
  this.createPath = 'propertynote';
  this.path = 'propertynote';
  this.id = id;

  this.property = new EntityLink({
    entity: 'Property'
  });

  this.note = new Note();
}
PropertyNote.prototype = new SingleEntity();

PropertyNote.prototype.toArray = function() {
  return {
    propertyid: this.property.id,
    noteid: this.note.id,
    fromdate: this.fromdate,
    todate: this.todate,
    requiresconfirmation: this.requiresconfirmation,
    showonweb: this.showonweb
  };
};

module.exports = PropertyNote;
