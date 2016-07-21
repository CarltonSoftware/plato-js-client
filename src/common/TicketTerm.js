var SingleEntity = require('./SingleEntity');

function TicketTerm(id) {
  this.path = 'term';
  this.createPath = 'term';
  this.id = id;
}
TicketTerm.prototype = new SingleEntity();
TicketTerm.prototype.toArray = function() {
  return {
    term: this.term
  };
};

module.exports = TicketTerm;
