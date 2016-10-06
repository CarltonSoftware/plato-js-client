var SingleEntity = require('./SingleEntity');

function TicketNote(id) {
  this.path = 'note';
  this.createPath = 'note';
  this.id = id;
}

TicketNote.prototype = new SingleEntity();
TicketNote.prototype.toArray = function() {
  return {
    message: this.message
  };
};

module.exports = TicketNote;
