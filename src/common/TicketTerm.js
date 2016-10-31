var SingleEntity = require('./SingleEntity');
var TicketTermType = require('./TicketTermType');

function TicketTerm(id) {
  this.path = 'term';
  this.createPath = 'term';
  this.id = id;
  this.termtype = new TicketTermType();
}
TicketTerm.prototype = new SingleEntity();
TicketTerm.prototype.toArray = function() {
  return {
    term: this.term,
    termtypeid: this.termtype.id
  };
};

module.exports = TicketTerm;
